/* eslint-disable react/jsx-no-literals */
import React from "react"
import { storiesOf } from "@storybook/react"

import BlogPost from ".."

storiesOf(`BlogPost`, module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }],
  })
  .add(`Single Page`, () => (
    <BlogPost
      data={`
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>
      I have hinted that I would often jerk poor Queequeg from between the whale and the ship—where he would occasionally fall, from the incessant rolling and swaying of both. But this was not the only jamming jeopardy he was exposed to.
    </p>
    <p>
    Unappalled by the massacre made upon them during the night, the sharks now freshly and more keenly allured by the before pent blood which began to flow from the carcass—the rabid creatures swarmed round it like bees in a beehive.
    </p>
    <img
      src="https://picsum.photos/1200/900/?image=${Math.floor(
        Math.random() * 85
      )}"
    />
    <p>
    So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive that my own individuality was now merged in a joint stock company of two; that my free will had received a mortal wound; and that another's mistake or <a>misfortune might</a> plunge innocent me into unmerited disaster and death. Therefore, I saw that here was a sort of interregnum in Providence; for its even-handed equity never could have so gross an injustice. And yet still further pondering—while I jerked him now and then from between the whale and ship.
    </p>
    <ul>
    <li>Unordered list item</li>
    <li>Unordered list item</li>
    <li>Unordered list item</li>
    <li>Unordered list item</li>
    <li>Unordered list item</li>
  </ul>
    <p>
    Which would threaten to jam him—still further pondering, I say, I saw that this situation of mine was the precise situation of every mortal that breathes; only, in most cases, he, one way or other, has this Siamese connexion with a plurality of other mortals.
    </p>
    <q>
    This is a nice blockquote. Use it wisely to highlight something very relevant.
    </q>
    <p>
    If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die. True, you may say that, by exceeding caution, you may possibly escape these and the multitudinous other evil chances of life. But handle Queequeg's monkey-rope heedfully as I would, sometimes he jerked it so, that I came very near sliding overboard. Nor could I possibly forget that, do what I would, I only had the management of one end of it.
    </p>
    <img
      src="https://picsum.photos/1200/900/?image=${Math.floor(
        Math.random() * 85
      )}"
    />
    <p>
    I have hinted that I would often jerk poor Queequeg from between the whale and the ship—where he would occasionally fall, from the incessant rolling and swaying of both. But this was not the only jamming jeopardy he was exposed to. Unappalled by the massacre made upon them during the night, the sharks now freshly and more keenly allured by the before pent blood which began to flow from the carcass—the rabid creatures swarmed round it like bees in a beehive.I have hinted that I would often jerk poor Queequeg from between the whale and the ship—where he would occasionally fall, from the inc.
    </p>
    <ol>
    <li>Ordered list item</li>
    <li>Ordered list item</li>
    <li>Ordered list item</li>
    <li>Ordered list item</li>
    <li>Ordered list item</li>
  </ol>
    `}
    />
  ))
