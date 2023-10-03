const config = {
  "Home": {
    suptitle: "Hi, I am Luis, and I am a ",
    title: "Data Scientist and Machine Learning Engineer",
    body: "I am passionate about data and bunnies. I am currently working many projects spanning data analysis, data science, and machine learning engineering. Learn more below!",
  },
  "About Me": {
    title: "About Me",
    body: "I am a passionate data analyst and data scientist with experience in data analysis and modeling. My expertise is in predictive modeling and I have worked in the food industry for product development. Additionally, I recently completed a data analytics program at Caltech, where I earned a certificate and Python Pro Award."
  },
  "Experience": {
    title: "My Experience",
    body: "These are some of the projects I have done or am currently doing...",
    seeMoreThreshold: 160,
    items: [
      {
        src: "/pizza.png", 
        alt: "Project: Pizza Restaurant", 
        title: "Pizza Restaurants In US", 
        githubURL: "https://github.com/LihAnHsu/Pizza-Restaurants-In-US",
        url: "projects/pizza_restaurants",
        content: `
          This project aims to analyze pizza restaurants in the US), using  SQLite for Data Cleaning and Exploratory Data Analysis (EDA).

          Some of the findings include that Marina Del Rey in CA has the most expensive average pizza, the top 3 cities owning most pizza restaurant are: Philadelphia, NY, East Granby,
          and that Monday serves the most pizza amount (1417 times of menu being viewed).
        `
      },
      {
        src: "/news.png", 
        alt: "Project: Online News SQL", 
        title: "Online News SQL", 
        githubURL: "https://github.com/LihAnHsu/Online_News_SQL-Project",
        url: "projects/online_news",
        content: `
          This project aims to get news by API to create a database and apply to SQL for analysis. 

          Some findings include that 4% of recent news title talk about OpenAI,
          Business Insider made the most news about AI related ones, 10% of content mention ChatGPT.
        `
      },
      {
        src: "/movie.png", 
        alt: "Project: IMDb Movie Industry", 
        title: "IMDb Movie Industry", 
        githubURL: "https://github.com/LihAnHsu/IMDb_Movie_Industry-",
        url: "projects/movie_industry",
        content: `
          This project provides some insights about movie industry which includes entry level actors. 

          Some findings include that the average age of actors becoming famous is older for actors than actress, 
          the most common language of movies is English, and the most current cited director is Jing Wong.
        `
      },
      {
        src: "/titanic.png", 
        alt: "Project: Titanic", 
        title: "Titanic Survivors", 
        githubURL: "https://github.com/LihAnHsu/Project_Titanic",
        url: "projects/titanic_survivors",
        content: `
          This project aims to predict the survival chance of passenger by several features (pclass, gender, age...).

          Some findings include that the top three important features were title of a person, sex, and fare. This was done 
          using a Decision Tree and Random Forest predictor, with 82% accuracy.
        `
      },
      {
        src: "/northwind.png", 
        alt: "Project: Northwind Grocery Store", 
        title: "Northwind Grocery Stores", 
        githubURL: "https://github.com/LihAnHsu/Northwind_project",
        url: "projects/northwind_stores",
        content: `
          This project aims to analyze Northwind grocery stores using Python and SQL. 

          Some findings include that between 1996-1997, Germany ordered the most Camembert Pierrot, 
          Grains/Cereals was the least in sale amount, and the most expensive item by unit_price was "Côte de Blaye".
        `
      },
    ]
  },
  "Contact Me": {
    title: "Contact Me",
    body: "Have any projects or job opportunities? Feel free to add me on LinkedIn or Email me below!"
  }
}

const generalConfig = {
  iconColor: "bg-primary",
  bgColor: "bg-primary",
  email: "lchinchillagarcia@gmail.com",
  linkedin: "https://www.linkedin.com/in/anne--hsu/",
  github: "https://github.com/luischinchillagarcia",
  resume: "/resume",
} as const

export { config, generalConfig }
