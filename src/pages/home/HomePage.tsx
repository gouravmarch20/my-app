import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../custom-hooks";
import { HomeData } from "../../data";

export const HomePage = () => {
  const { categories } = HomeData;
  console.log(categories);
  useDocumentTitle("Are you even a Marvel fan? Let's Check");

  return (
    <div>
      <main>
        <h1 className="heading">Choose Your Category</h1>

        <section className="homepage">
          {categories.map((category) => {
            return (
              <section
                key={category._id}
                // onClick={() => clickHandler(category._id)}
                className="more-quiz"
              >
                <h2 className="subheading">{category.categoryName}</h2>
                <div className="cursor-pointer">
                  <img
                    src={category.img.src}
                    alt={category.img.altText}
                    className="image--responsive"
                  />
                </div>
                <p className="quiz-description">{category.description}</p>
              </section>
            );
          })}
        </section>
      </main>
    </div>
  );
};
