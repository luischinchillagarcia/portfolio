import { atom, useAtomValue, useSetAtom, useAtom } from 'jotai'
import { configSections, Sections, Card } from '@/types'

type initHandlerTypes = Card | Sections | string

type ReadonlyTuple = readonly [PropertyKey, unknown]
type ReadonlyTuples = readonly ReadonlyTuple[]
function typeSafeObjectFromEntries <const Tuples extends ReadonlyTuples>(entries: Tuples): {[Tuple in Tuples[number] as Tuple[0]]: Tuple[1]} {
  return Object.fromEntries(entries) as {[Tuple in Tuples[number] as Tuple[0]]: Tuple[1]} 
};

const handlerFn = () => (event: React.MouseEvent<HTMLElement>) => {}

function initialHandlers<const T extends initHandlerTypes>(sections: T[]) {
  const initHandlersEntries = sections.map(section => [section, handlerFn()] as const) 
  const initObjects = typeSafeObjectFromEntries(initHandlersEntries)
  return initObjects
}

const scrollingRefs = atom(initialHandlers<Sections>(configSections))
const scrollingRefsCarousel = atom(initialHandlers<Card>([]))

export { scrollingRefs, scrollingRefsCarousel }
