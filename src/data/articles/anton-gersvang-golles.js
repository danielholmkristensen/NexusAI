export const article = {
  headline: "THE PHYSICIST OF METADATA",
  dek: "A 26-year-old in Copenhagen runs the AI factory deciding which Christmas Eve cover of Die Hard you'll see in 2027",
  byline: "Daniel Holm Kristensen",
  reportedDate: "April 2026",
  readingTime: "12 min read",
  // Image paths relative to public folder
  heroImage: "/practitioners/anton/01-hero-physicist.jpg",
  sections: [
    {
      number: "I",
      title: "THE NEEDLE AND THE HAYSTACK",
      image: {
        src: "/practitioners/anton/04-needle-haystack.jpg",
        mode: "full-bleed",
        caption: "The haystack grows. The needle does not."
      },
      content: `Every December 24th, somewhere between the duck and the marzipan-wrapped almond, a Dane sits down on a sofa, opens his electronic program guide, and finds **Die Hard** on TV2 again. Bruce Willis, dirty-vested. *En juleklassiker*, the Danish description calls it — a Christmas classic, which depending on whom you ask is a fact of life or a national psychiatric condition.

The cover he sees is not the cover a viewer in Reykjavík sees, or the one an Austrian aggregator picked from the original German poster. Roughly 65,000 TV channels exist in the world; hundreds of streaming services sit on top. A film like *Die Hard* fans out across maybe 200 of them, in 30 languages. Until recently the work — title, image, genre tag, parental rating, blurb — was done almost entirely by humans: editors, freelancers, tier-three workers in Manila and Bucharest and Cairo, picking Bruce Willis stills at 3 a.m.

In Copenhagen, a 26-year-old computational physicist named **Anton Gersvang Golles** is automating that job away.

He puts it like this: *How hard is it to find a needle in a haystack? It depends a lot on how big the haystack is.*

I caught Anton on a Friday morning in April, eighteen months out of his master's, four months into running the AI function at **Simply.TV** — the Danish B2B firm supplying that mountain of metadata to operators in roughly sixty countries. His company has, by his account, just crossed a real threshold: 99-point-something accuracy on enough features that the editors are, for the first time, being replaced by software he wrote.`
    },
    {
      number: "II",
      title: "THE AUTOENCODER",
      sectionBreakAfter: true,
      content: `The origin story is short. A third-year physics project at the **University of Copenhagen**: simulate a quantum many-body system, figure out what *phase* it's in. Anton, fresh into Python, started with **principal component analysis** — the linear-algebra hammer of every introductory ML class. PCA was fine. PCA was boring.

Then somebody mentioned an *autoencoder*.

It is a neural network with a waist. Data goes in, gets squeezed through a narrow bottleneck of neurons, and is expanded back out. Training pushes the output toward the input — but the bottleneck is too narrow to memorize, so the network has to learn to compress. ZIP, but for one specific kind of data. ZIP, but learned.

For most engineers it is a useful trick. For Anton it was *the* idea. *In physics we typically build the simplest possible representation of a physical phenomenon,* he says. Here was a network that, given enough data, would just do that on its own. *If the function is large enough, it could in principle learn anything.* Sam Altman, Yann LeCun, and Andrej Karpathy have made variants of that argument for a decade. Anton walked into the same conviction by way of an undergraduate phase-detection project. It is the throughline of his career.`
    },
    {
      number: "III",
      title: "THE COMPUTE WALL",
      image: {
        src: "/practitioners/anton/05-compute-wall.jpg",
        mode: "full-bleed",
        caption: "A kayak versus an aircraft-carrier strike group."
      },
      content: `There is a deflating chapter where Anton tries to do what every ambitious physics-into-AI student in Europe was trying to do in 2024, and the universe says no.

His master's at **Rokoko**, the Danish motion-capture company, was on **text-to-motion**: type "walk forward four steps and do a salsa twirl," get a clean motion sequence to drop into Blender or Unreal. Rokoko had the dataset — 1.2 million clips, 10,000+ hours, 50,000+ subjects. He built a transformer-diffusion model. He hit, in his words, *not enough training compute.*

The numbers are worth seeing. A single Nvidia H100 SXM5 delivers roughly 4 petaflops at FP8 sparse, with 80 GB of HBM3 and 3.35 TB/s of memory bandwidth. A modest desktop GPU — an RTX 4090 — delivers about 0.66 petaflops, 24 GB, 1 TB/s. Five hundred H100s wired through NVLink and InfiniBand reach roughly 2 *exa*flops aggregate, with 40 TB of pooled memory and an interconnect that lets them cooperate as one machine.

That is not a letter-to-novel ratio. It is closer to **a kayak versus an aircraft-carrier strike group** — a thousands-fold gap in compute, a thousands-fold gap in memory, and a connective tissue the kayak doesn't have. The thesis got top marks. The demo never shipped. The lesson — *find a problem where compute is not the limiting reagent* — is the most important lesson of his career.`
    },
    {
      number: "IV",
      title: "THE METADATA FACTORY",
      image: {
        src: "/practitioners/anton/06-metadata-forest.jpg",
        mode: "inset-left",
        caption: "A forest of partly-overlapping descriptions."
      },
      content: `A film is, as a corporate object, ten thousand metadata records. *Die Hard* is one example; *Pulp Fiction*, with its genre-tagging chaos, is another. Every distributor ships a metadata payload. Every channel and streamer enriches it: translates the synopsis, swaps the image, tags it against an internal genre tree, adds a local rating. The result is a forest of partly-overlapping descriptions of the same movie.

Simply.TV makes sense of that forest. Roughly 450 people across 60 countries; many millions of operations per day. In April 2025, **Summit Partners** took a majority stake and stitched in **Red Bee Media's Content Discovery business**, giving them serious global reach.

The engine, until recently, was human editorial labor: tier-three editors picking the best image for *Frozen* in Romanian, the best title for a Korean drama in Catalan. Each choice took seconds. Repeated billions of times, it became one of the larger pools of structured human-judgment data outside the major labs' RLHF farms — exactly what Anton needs to *evaluate* AI replacements. Most companies trying to deploy LLMs in production die because they have no ground truth. Simply.TV's previous decade is, viewed correctly, a perfectly-labeled best-of-N preference dataset. They did not know they were building it.`
    },
    {
      number: "V",
      title: "THE 1/100 ECONOMICS",
      pullquote: {
        text: "We need to come down to roughly a hundredth of the price for it to make sense.",
        backgroundImage: "/practitioners/anton/08-concrete-bed.jpg"
      },
      content: `Process several hundred million metadata operations per day on a frontier model — Opus, GPT-4 Turbo class — and the math does not close. *We need to come down to roughly a hundredth of the price for it to make sense,* Anton says.

A hundredth means **small models**: in April 2026, Google's **Gemini 2 Flash** plus a fleet of open-source models he declines to name on the record but any reader can guess — Llama, Qwen, Mistral. The frontier in this benchmark is not model quality. It is dollars per million tokens.

The architecture is what gets fun. *The little one tries first*, he says. *It outputs both an answer and a confidence. If the confidence is high, we ship. If not, the master steps in* — a larger, more expensive model — *and tries the same problem.* Most queries — many millions a day — never see a frontier model.

This is a **cascade**. Cascades are old. They are also fashionable again, for the obvious reason: most production work is easy, and the expensive model only earns its keep on the hard tail. The work of his team is largely the work of figuring out where each cascade sits on the cost/quality frontier.`
    },
    {
      number: "VI",
      title: "THE 80% TRAP",
      image: {
        src: "/practitioners/anton/02-working-laptop.jpg",
        mode: "inset-right",
        caption: "Mid-thought, mid-engineering."
      },
      content: `I asked him what is hard. He paused — long enough that I could sense the level of thinking that went on in that pause — and said: *The last few percent of precision are what's hard.*

Here is the thing about generative-AI demos that everyone in the industry knows and nobody admits in marketing copy: 80% is *easy*. 95% is hard. 99-point-something is no trivial feat.

*95 percent is not good enough,* Anton says. *You have to be at 99-point-something to be on a level with a professional editor.* TV2 will accept some quirks. Disney+ has zero tolerance for a wrong image. A sci-fi fan opening Disney+ to find that *Andor* now shows a poster from another show will be on social media within minutes, and Disney+ will be on the phone with Simply.TV. The single wrong image is a contractual matter.

The interesting move is what he says next: he does not blame the models. He calls it *very much an AI engineering task. How do we handle our context, are we even asking for what we want?* The 2024–2025 frame was: if your product isn't good enough, wait for the next model. Anton's 2026 view is different. The recent gains, in his read, have come more from engineering practice than from the models. *I see no blockers to where we are aiming,* he says. *Put on the work clothes and keep going.*`
    },
    {
      number: "VII",
      title: "DREAM, AND THE NIGHTLY CULL",
      image: {
        src: "/practitioners/anton/07-dream-cull.jpg",
        mode: "full-bleed",
        caption: "An office at 2am. The machine is doing housework."
      },
      content: `The most quotable artifact in the interview is an agent named **Dream**.

Dream runs every night across Simply.TV's internal knowledge base. It reads through meeting transcripts, looks for redundant documents — the same fact stored in three places, the same decision recorded twice — finds missing links, and flags pages no one has touched in months. Then it proposes a tidy.

It is a **garbage collector** for organizational knowledge. The specific software response to a specific problem: agentic systems make knowledge bases grow faster than they need to. Put a transcription agent on a meeting; the agent decides to keep notes about *who studied physics at university* on the side. A hundred meetings later, your knowledge base has tripled and most of it is biographical noise. The bigger the haystack, the harder the needle. So Dream's job is to *forget*.

He had to rename it. *I heard rumors a Claude Dream is on the way,* he tells me, deadpan, *so I had to change the name.* New name: *Knowledge Based Cleanup*. *Not as cool. Dream was better.*

Dream is where Anton's debt to **Andrej Karpathy** is most obvious. Karpathy — former Tesla AI head, founding member of OpenAI — has been evangelizing what he calls *auto-research* and an *LLM Wiki*: a knowledge base that updates itself, summarizes its contents, prunes its redundancies. Anton's Dream is Simply.TV's instance of that idea, built four weeks after Karpathy first sketched it in public. *Andrej Karpathy is, for me and Gen AI, what Richard Feynman was for physics,* Anton says. He means it.`
    },
    {
      number: "VIII",
      title: "THE NEW SCHOOL",
      sectionBreakAfter: true,
      content: `If you ask Anton who he wants to hire, he does not give the 2018 answer.

*I would very much like to hire people who used to be game designers, or who studied psychology,* he says. The new generation of AI engineers, in his view, do not need six years of Python. They need **prompt engineering, context management, and system design** — skills that map weirdly well to non-engineering disciplines. Game designers, whose craft is rule systems within which agents pursue goals. Psychology majors, who have spent four years on how minds, including LLMs, fail to do what you'd expect. *As easily as a CS or maths background.*

He has no tolerance for generalists. They have to be *good* at their thing. His interview question is the most condensed version of the philosophy I have heard from any modern engineering leader: *When you sit at the office, what is it that the others come over to your desk to ask about?* If the candidate cannot articulate a thing they are visibly the strongest at on the team, they are not the right hire. *We don't really need someone who is average at backend design and can also build a small agent,* he says. *Otherwise I could just do it myself with my Claude.*

The model has, in 2026, become the new junior generalist. The humans worth hiring are durably better than the model at *something*. That floor moves up every quarter.`
    },
    {
      number: "IX",
      title: "THE SYNERGY OF TWO",
      content: `When the conversation turned to org design, Anton dropped one line on the record I want to keep visible.

*I would not normally cut below two,* he says — about technical teams, about working pairs. *Because the synergy between two people is enormously productive in all kinds of work — whether it's creative design, what should our brochures look like, or how to build this system. There is something magical that comes out of two brains working together.*

It is the line of a 26-year-old who has built and rebuilt small teams more times in two years than most managers do in a decade.`
    },
    {
      number: "X",
      title: "THE NEXT PARADIGM",
      pullquote: {
        text: "I would not bet that Anthropic is the clear winner in the next paradigm too.",
        backgroundImage: null  // Plain black background
      },
      content: `I asked him what he was watching beyond his backyard. *Are we entering another paradigm?* he says.

His read: there was an OpenAI moment — 2022 to 2023 — when ChatGPT was the only product. Then a brief Google moment in 2024. Then Anthropic, 2025 into early 2026, when Claude pulled ahead on the *coding* paradigm. Each era ended.

The next, in his view, is **computer use** — the family of capabilities where an agent operates a graphical interface directly: opens a browser, clicks elements, types into forms, drags files. By autumn 2026, in his read, the technology crosses from tech demo to useful workflow.

The reason it matters: an inferior model with hands-on tools beats a superior model in isolation. *You probably get better code output from a worse model that can really interact with its output*, he says, *than from a better model doing it semi-blind.* *I would not bet that Anthropic is the clear winner in the next paradigm too.* The implication for everyone else: decouple from your provider, run an eval suite, bet on capabilities.`
    },
    {
      number: "XI",
      title: "THREE LEVELS, AND A FOOTNOTE",
      sectionBreakAfter: true,
      content: `Late in the interview, Anton sketched a typology I think is correct.

**Level 1, solo.** You build for yourself. Tired of paying for a meeting recorder, he wrote his own — a Swift app that captures microphone and system audio, transcribes, runs analysis. On a Wednesday. A few hours of vibe coding with Claude. **Level 2, in-team.** Five or ten people in a sales department who share context. **Level 3, end-to-end.** You sit at HQ. You optimize across the whole stack — cost, data, compliance.

*Level 1 is the most fun,* Anton says. *And then it gets harder, and less fun, the higher you go.* This explains, almost completely, why so many veteran engineers and former CTOs have, in 2026, returned to Level 1.

The Wednesday-recorder anecdote is also a tell. Anton recorded our conversation on his end, with his own software. He has a parallel transcript and an LLM analysis of what I said. Every senior person you talk to in 2026 is recording you. The asymmetry of who has these tools, and who does not, is becoming one of the core class divides in knowledge work.`
    },
    {
      number: "XII",
      title: "CODA",
      closerImage: {
        src: "/practitioners/anton/03-environmental-copenhagen.jpg",
        caption: "Copenhagen. The corridor continues."
      },
      content: `Picking the best image for *Die Hard* across two hundred sources in thirty languages is, formally, a compression problem. So is summarizing a meeting into three bullets, keeping a knowledge base lean, the cascade, the hiring rubric. There is signal worth keeping. There is noise that wants to flood in.

The deeper claim of Anton's career is that the right people for the next decade of AI work are the hybrids — the physicists who learned to ship, the game designers who learned to write evals, the psychologists who learned to draw a system architecture diagram.

Next December 24th, the cover image of *Die Hard* on TV2 will be picked, almost certainly, by software an Anton-shaped person built. Same sweaty Bruce Willis. Wrong, probably, in fewer than one in ten thousand cases. Nobody watching will think about who decided. That is the trick. That is always the trick. **Compression, when it works, is invisible.**`
    }
  ],
  endnote: null,
  pullQuotes: [
    { text: "How hard is it to find a needle in a haystack? It depends a lot on how big the haystack is.", section: "I" },
    { text: "If the function is large enough, it could in principle learn anything.", section: "II" },
    { text: "Find a problem where compute is not the limiting reagent.", section: "III" },
    { text: "We need to come down to roughly a hundredth of the price for it to make sense.", section: "V" },
    { text: "95 percent is not good enough. You have to be at 99-point-something.", section: "VI" },
    { text: "Andrej Karpathy is, for me and Gen AI, what Richard Feynman was for physics.", section: "VII" },
    { text: "When you sit at the office, what is it that the others come over to your desk to ask about?", section: "VIII" },
    { text: "I would not bet that Anthropic is the clear winner in the next paradigm too.", section: "X" },
    { text: "Compression, when it works, is invisible.", section: "XII" }
  ]
};
