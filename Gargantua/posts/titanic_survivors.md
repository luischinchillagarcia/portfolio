---
suptitle: Project 
title: Titanic Survivor
github: https://github.com/LihAnHsu/Project_Titanic
---

<Image src="/titanic.png" className="rounded-box mx-auto" alt="Titanic Survivors" width={400} height={400}/>

This project aims to predict the survival chance of passenger by several features (pclass, gender, age...).
Some findings include that:

1. The top 3 important feature of prediction are: 
   * Title of name
   * Sex
   * Fare
2. Decision Tree & random forest perform the best prediction:  
   * 0.82 +- 0.05, 0.80 +- 0.06 respectively by K-fold cross validation