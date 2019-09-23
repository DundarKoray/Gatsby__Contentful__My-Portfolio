import React from "react"
import { storiesOf } from "@storybook/react"
import { withViewport } from "@storybook/addon-viewport"

import BlogList from "../index"

const blogsData = [
  {
    title: "It was a humorously perilous business for both of us. For, before.",
    date: new Date(),
    link: "/",
  },
  {
    title:
      "Being the savage's bowsman, that is, the person who pulled the bow.",
    date: new Date(),
    link: "/",
  },
  {
    title:
      "The monkey-rope is found in all whalers; but it was only in the Pe.",
    date: new Date(),
    link: "/",
  },
]

const articlesData = [
  {
    media: "Sitra",
    title: "It was a humorously perilous business for both of us. For, before.",
    date: "01.02.2018",
    link: "/",
  },
  {
    media: "Kauppalehti",
    title:
      "Being the savage's bowsman, that is, the person who pulled the bow.",
    date: "01.02.2018",
    link: "/",
  },
  {
    media: "SKL",
    title:
      "The monkey-rope is found in all whalers; but it was only in the Pe.",
    date: "01.02.2018",
    link: "/",
  },
]

storiesOf(`BlogList`, module)
  .addDecorator(withViewport())
  .addWithJSX(`blogs`, () => (
    <div style={{ width: "60%" }}>
      <BlogList data={blogsData} />
    </div>
  ))
  .add("blogs mobile", () => <BlogList data={blogsData} />, {
    viewport: "iphone8p",
  })
  .addWithJSX(`blogs with title and link`, () => (
    <div style={{ width: "50%" }}>
      <BlogList data={blogsData} wrapper />
    </div>
  ))
  .add(
    "blogs with title and link mobile",
    () => <BlogList data={blogsData} wrapper />,
    {
      viewport: "iphone8p",
    }
  )
  .addWithJSX(`articles`, () => (
    <div style={{ width: "50%" }}>
      <BlogList data={articlesData} />
    </div>
  ))
  .add("articles mobile view", () => <BlogList data={articlesData} />, {
    viewport: "iphone8p",
  })
