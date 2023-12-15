let blogs = [
  {
    id: "1",
    title: "Hello world comeback is the best",
    category: "business",
    writer: {
      img: "/favicon.ico",
      name: "daniel mantell",
      role: "CEO and Founder",
    },
    tags: ["travel", "technology", "ai"],
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, deserunt. dolor sit amet consectetur adipisicing`,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, exercitationem officiis consequatur, dolore, ratione explicabo asperiores ea adipisci tempora corrupti ad itaque nesciunt a voluptate?`,
    date: "Jan 24, 2021",
    time: "",
    image: { big: "/t1.jpg", small: "/t1.jpg" },
    write: {
      text: `<span class="highlight left">
            voluptate nostrum odit dolores est dolorum consectetur. Doloribus
            reprehenderit velit dicta voluptates! Obcaecati deserunt autem
            expedita ducimus quam quos doloribus error? Iusto molestias,
            pariatur ex reiciendis in obcaecati perferendis, porro praesentium
            impedit voluptate, quae assumenda laudantium incidunt numquam atque
            illo eos optio distinctio aut et quos. Assumenda, eaque.
          </span>
          <span>
            Dolorum odit doloribus accusamus quod, eveniet quidem, maiores
            voluptas minus natus illo ab corrupti voluptate necessitatibus
            libero unde inventore consectetur nisi, consequuntur ad ea. <br />
            Aperiam eos quaerat iste magnam quia voluptates sit aliquam pariatur
            veritatis placeat, asperiores itaque fuga deserunt nulla fugiat
            nemo.
          </span>
          <span class="h3 fw-6 text-decoration-underline">
            Tangled Thought ?
          </span>
          <span class="highlight left slant">
            voluptate nostrum odit dolores est dolorum consectetur. Doloribus
            reprehenderit velit dicta voluptates! Obcaecati deserunt autem
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            consequuntur veniam incidunt unde fugit, natus at voluptatum.
            Consectetur itaque repudiandae sapiente facere modi, quis quibusdam
            odio voluptatibus molestiae ad ipsum.
          </span>`,
    },
    comments: [
      {
        name: "David Annel",
        img: "/favicon.ico",
        date: "Jan 27, 2021",
        txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.",
        likes_count: 1,

        replies: [
          {
            name: "Mike John",
            img: "/favicon.ico",
            date: "Jan 27, 2021",
            txt: "Freww trrsj Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.",
            likes_count: 0,
          },
          {
            name: "pete robison",
            img: "/favicon.ico",
            date: "Jan 27, 2021",
            txt: "Freww trrsj Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.",
            likes_count: 0,
          },
        ],
      },
      {
        name: "Mike John",
        img: "/favicon.ico",
        date: "Jan 27, 2021",
        txt: "Freww trrsj Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.",
        likes_count: 1,
        replies: [
          {
            name: "pete robison",
            img: "/favicon.ico",
            date: "Jan 27, 2021",
            txt: "Freww trrsj Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.",
            likes_count: 0,
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Your most unhappy customers are your greatest source of learning.",
    category: "travel",
    writer: {
      img: "/favicon.ico",
      name: "Finder miller",
      role: "Co Founder",
    },
    tags: ["business", "news", "design"],
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, deserunt. dolor sit amet consectetur adipisicing`,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, exercitationem officiis consequatur, dolore, fi tempora corrupti ad itaque nesciunt a voluptate?`,
    date: "Jan 24, 2021",
    time: "",
    image: { big: "/t2.jpg", small: "/t2.jpg" },
    write: {
      text: `<span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            dolorum odit doloribus accusamus quod, eveniet quidem, maiores
            voluptas minus natus illo ab corrupti voluptate necessitatibus
            libero unde inventore consectetur nisi, consequuntur ad ea. Aperiam
            eos quaerat iste magnam quia voluptates sit aliquam pariatur
            veritatis placeat, asperiores itaque fuga deserunt nulla fugiat
            nemo.
          </span>
          <span class="highlight left">
            voluptate nostrum odit dolores est dolorum consectetur. Doloribus
            reprehenderit velit dicta voluptates! Obcaecati deserunt autem
            expedita ducimus quam quos doloribus error? Iusto molestias,
            pariatur ex reiciendis in obcaecati perferendis, porro praesentium
            impedit voluptate, quae assumenda laudantium incidunt numquam atque
            illo eos optio distinctio aut et quos. Assumenda, eaque.
          </span>
          <span>
            Dolorum odit doloribus accusamus quod, eveniet quidem, maiores
            voluptas minus natus illo ab corrupti voluptate necessitatibus
            libero unde inventore consectetur nisi, consequuntur ad ea. <br />
            Aperiam eos quaerat iste magnam quia voluptates sit aliquam pariatur
            veritatis placeat, asperiores itaque fuga deserunt nulla fugiat
            nemo.
          </span>`,
    },
    comments: [
      {
        name: "Dan Jones",
        img: "/favicon.ico",
        date: "Jan 27, 2021",
        txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.",
        likes_count: 1,

        replies: [
          {
            name: "Gin Jin",
            img: "/favicon.ico",
            date: "Jan 27, 2021",
            txt: "Freww trrsj Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.",
            likes_count: 0,
          },
          {
            name: "Kess West",
            date: "Jan 27, 2021",
            img: "/favicon.ico",
            txt: "Freww trrsj Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.",
            likes_count: 0,
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Reliving nature of it's pains and anguish.",
    category: "nature",
    writer: {
      img: "/favicon.ico",
      name: "Finder miller",
      role: "Co Founder",
    },
    tags: ["technology", "nature"],
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, deserunt. dolor sit amet consectetur adipisicing`,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, exercitationem officiis consequatur, dolore, ratione explicabo asperiores ea adipisci tempora corrupti ad itaque nesciunt a voluptate?`,
    date: "Jan 25, 2021",
    time: "",
    image: { big: "/tj.png", small: "/t3.jpg" },
    write: {
      text: `<span class="h1 bx bx-camera d-flex x5-gap ai-c">Nice shots</span>
          <div class="photo-gallary g3X3">
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
          </div>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto rem
            impedit explicabo non adipisci, quis eius quos, repudiandae alias
            aspernatur amet blanditiis! Earum eum nostrum, repudiandae rem
            impedit explicabo non adipisci, quis eius quos, repudiandae alias
            aspernatur amet blanditiis! Earum eum nostrum, repudiandae inventore
            officia ullam ab.
          </span>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            distinctio repellat explicabo quas eius sequi harum, sapiente modi
            est omnis incidunt illo fugit molestias fugiat, totam minus ipsam
            aperiam quo. Amet excepturi debitis maiores?
          </span>
          <span class="h1 fw-8">Peak creatives</span>
          <div class="photo-gallary g3X3">
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
          </div>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            inventore ipsam esse, unde adipisci incidunt nihil a nostrum
            pariatur doloremque modi iste, laborum deserunt sapiente minima
            numquam hic, tempore ullam!
          </span>
          <span>Thanks for the read 😆</span>`,
    },
    comments: [
      {
        name: "Dan Jones",
        img: "/favicon.ico",
        date: "Jan 27, 2021",
        txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.",
        likes_count: 1,

        replies: [
          {
            name: "Gin Jin",
            img: "/favicon.ico",
            date: "Jan 27, 2021",
            txt: "Freww trrsj Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.",
            likes_count: 5,
          },
          {
            name: "Kess West",
            img: "/favicon.ico",
            date: "Jan 27, 2021",
            txt: "Freww trrsj Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.",
            likes_count: 2,
          },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Recontructing, Rennovating and Revaluating young minds.",
    category: "management",
    writer: {
      img: "/favicon.ico",
      name: "Ope byson",
      role: "Carrer Director",
    },
    tags: ["motivation", "management"],
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, deserunt. dolor sit amet consectetur adipisicing`,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, exercitationem officiis consequatur, dolore, ratione explicabo asperiores ea adipisci tempora corrupti ad itaque nesciunt a voluptate?`,
    date: "Jan 30, 2021",
    time: "",
    image: { big: "/t4.jpg", small: "/t4.jpg" },
    write: {
      text: `<span class="h1 bx bx-camera d-flex x5-gap ai-c">Nice shots</span>
          <div class="photo-gallary g3X3">
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
          </div>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto rem
            impedit explicabo non adipisci, quis eius quos, repudiandae alias
            aspernatur amet blanditiis! Earum eum nostrum, repudiandae rem
            impedit explicabo non adipisci, quis eius quos, repudiandae alias
            aspernatur amet blanditiis! Earum eum nostrum, repudiandae inventore
            officia ullam ab.
          </span>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            distinctio repellat explicabo quas eius sequi harum, sapiente modi
            est omnis incidunt illo fugit molestias fugiat, totam minus ipsam
            aperiam quo. Amet excepturi debitis maiores?
          </span>
          <span class="h1 fw-8">Peak creatives</span>
          <div class="photo-gallary g3X3">
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
          </div>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            inventore ipsam esse, unde adipisci incidunt nihil a nostrum
            pariatur doloremque modi iste, laborum deserunt sapiente minima
            numquam hic, tempore ullam!
          </span>
          <span>Thanks for the read 😆</span>`,
    },
    comments: [
      {
        name: "Gin Jin",
        img: "/favicon.ico",
        date: "Jan 27, 2021",
        txt: "Freww trrsj Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.",
        likes_count: 5,

        replies: [
          {
            name: "Maki kines",
            img: "/favicon.ico",
            date: "Jan 27, 2021",
            txt: "Freww trrsj Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.",
            likes_count: 5,
          },
          {
            name: "Kess West",
            img: "/favicon.ico",
            date: "Jan 27, 2021",
            txt: "Freww trrsj Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.",
            likes_count: 2,
          },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Revaluating AI Implications in society oder and wellness.",
    category: "artificial intelligence",
    writer: {
      img: "/favicon.ico",
      name: "daniel mantell",
      role: "CEO and Founder",
    },
    tags: ["technology", "artificial intelligence"],
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, deserunt. dolor sit amet consectetur adipisicing`,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, exercitationem officiis consequatur, dolore, ratione explicabo asperiores ea adipisci tempora corrupti ad itaque nesciunt a voluptate?`,
    date: "Jan 30, 2021",
    time: "",
    image: { big: "/bitmap.png", small: "/bitmap.png" },
    write: {
      text: `<span class="h1 bx bx-camera d-flex x5-gap ai-c">Nice shots</span>
          <div class="photo-gallary g3X3">
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
          </div>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto rem
            impedit explicabo non adipisci, quis eius quos, repudiandae alias
            aspernatur amet blanditiis! Earum eum nostrum, repudiandae rem
            impedit explicabo non adipisci, quis eius quos, repudiandae alias
            aspernatur amet blanditiis! Earum eum nostrum, repudiandae inventore
            officia ullam ab.
          </span>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            distinctio repellat explicabo quas eius sequi harum, sapiente modi
            est omnis incidunt illo fugit molestias fugiat, totam minus ipsam
            aperiam quo. Amet excepturi debitis maiores?
          </span>
          <span class="h1 fw-8">Peak creatives</span>
          <div class="photo-gallary g3X3">
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
            <img src="/t1.jpg" alt="..." />
          </div>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            inventore ipsam esse, unde adipisci incidunt nihil a nostrum
            pariatur doloremque modi iste, laborum deserunt sapiente minima
            numquam hic, tempore ullam!
          </span>
          <span>Thanks for the read 😆</span>`,
    },
    comments: [
      {
        name: "Gin Jin",
        img: "/favicon.ico",
        date: "Jan 27, 2021",
        txt: "Freww trrsj Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.",
        likes_count: 5,

        replies: [
          {
            name: "Maki kines",
            img: "/favicon.ico",
            date: "Jan 27, 2021",
            txt: "Freww trrsj Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.",
            likes_count: 5,
          },
          {
            name: "Kess West",
            img: "/favicon.ico",
            date: "Jan 27, 2021",
            txt: "Freww trrsj Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.",
            likes_count: 2,
          },
        ],
      },
    ],
  },
];

function setBlogs(newBlog) {
  blogs = newBlog;
}

export { blogs, setBlogs };
