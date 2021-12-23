const articles = [
    {
        heading: "hello world",
        body: "gefoihef zefoihzefijzfe fzeoibzefihfze fzeoihzfepihzef zfeihzefhzef"
    },
    {
        heading: "hello world",
        body: "gefoihef zefoihzefijzfe fzeoibzefihfze fzeoihzfepihzef zfeihzefhzef"
    },
    {
        heading: "hello world",
        body: "gefoihef zefoihzefijzfe fzeoibzefihfze fzeoihzfepihzef zfeihzefhzef"
    },
    {
        heading: "hello world",
        body: "gefoihef zefoihzefijzfe fzeoibzefihfze fzeoihzfepihzef zfeihzefhzef"
    },
    {
        heading: "hello world",
        body: "gefoihef zefoihzefijzfe fzeoibzefihfze fzeoihzfepihzef zfeihzefhzef"
    },
    {
        heading: "hello world",
        body: "gefoihef zefoihzefijzfe fzeoibzefihfze fzeoihzfepihzef zfeihzefhzef"
    },
    {
        heading: "hello world",
        body: "gefoihef zefoihzefijzfe fzeoibzefihfze fzeoihzfepihzef zfeihzefhzef"
    },
    {
        heading: "hello world",
        body: "gefoihef zefoihzefijzfe fzeoibzefihfze fzeoihzfepihzef zfeihzefhzef"
    }
]

const root = document.getElementById("root")

articles.map((article) => {
    const heading = document.createElement("h1")
    const body = document.createElement("div")

    heading.classList.add('test')

    heading.innerHTML = article.heading
    body.innerHTML = article.body

    root.appendChild(heading)
    root.appendChild(body)
})

root.addEventListener('click', (e) => {
    if (e.target.classList.contains("test")) {
        e.target.classList.remove('test')
    } else {
        e.target.classList.add('test')
    }
})







console.log(hello("lhoussaine"))