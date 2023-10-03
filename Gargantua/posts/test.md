---
suptitle: Suptitle
title: Layout and Typography
---

# Normal Text

```
I think most people are going to use [highlight.js](https://highlightjs.org/) or [Prism](https://prismjs.com/) or something if they want to style their code blocks but it wouldn't hurt to make them look _okay_ out of the box, even with no syntax highlighting.

Here's what a default `tailwind.config.js` file looks like at the time of writing:
```

This is what normal text looks like. 

*Here is a sentence in Italics*, but you can do single _words_ with underscores. 

**Here is one in bold**

Use backticks for anything within code `like this`, or `@tailwindcss/typography`

Here is a link [This Link wont work]()


Here is an image

<Image src="/bunny.jpeg" className="rounded-box" alt="Little Bunny" width={200} height={200}/>


# Headings

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

```markdown
# Headings

# Heading 1

## Heading 2

### Heading 3

#### Heading 4
```


# This is a quote
> Why is Tailwind removing the default styles on my `h1` elements? How do I disable this? What do you mean I lose all the other base styles too?


For more information about how to use the plugin and the features it includes, [read the documentation](https://github.com/tailwindcss/typography/blob/master/README.md).

---


# Lists

1. This is a list element
1. It has numbers
1. You can put 1s on each element and Markdown will correct the numbers

* Here is a bullet point list
* Another element
  * Nested element

1. Here is a mix of list types
    * Here is a bullet
        a. But also a letter


```markdown
1. This is a list element
1. It has numbers
1. You can put 1s on each element and Markdown will correct the numbers

* Here is a bullet point list
* Another element
  * Nested element

1. Here is a mix of list types
    * Here is a bullet
        a. But also a letter
```

## Code should look okay by default.

I think most people are going to use [highlight.js](https://highlightjs.org/) or [Prism](https://prismjs.com/) or something if they want to style their code blocks but it wouldn't hurt to make them look _okay_ out of the box, even with no syntax highlighting.

Here's what a default `tailwind.config.js` file looks like at the time of writing:

```js
module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```


---



## Nested Lists

Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work.

1. **Nested lists are rarely a good idea.**
   - You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read.
   - Nested navigation in UIs is a bad idea too, keep things as flat as possible.
   - Nesting tons of folders in your source code is also not helpful.
2. **Since we need to have more items, here's another one.**
   - I'm not sure if we'll bother styling more than two levels deep.
   - Two is already too much, three is guaranteed to be a bad idea.
   - If you nest four levels deep you belong in prison.
3. **Two items isn't really a list, three is good though.**
   - Again please don't nest lists if you want people to actually read your content.
   - Nobody wants to look at this.
   - I'm upset that we even have to bother styling this.


---
