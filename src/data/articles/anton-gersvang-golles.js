export const article = {
  headline: "THE PHYSICIST OF METADATA",
  dek: "How a 26-year-old computational physicist from Copenhagen ended up running an AI factory that decides which Christmas Eve cover of Die Hard you'll see in 2027",
  byline: "Daniel Holm Kristensen",
  reportedDate: "April 2026",
  readingTime: "14 min read",
  sections: [
    {
      number: "I",
      title: "THE NEEDLE AND THE HAYSTACK",
      content: `Every December 24th, somewhere between the duck and the marzipan-wrapped almond, a Dane sits down on a sofa, opens his electronic program guide, and sees that **Die Hard** is on TV2 again. The cover shows Bruce Willis, dirty-vested and sweaty, against an exploding skyscraper. The description, in Danish, calls it *en juleklassiker* — a Christmas classic — which is, depending on whom you ask, either a fact of life or a national psychiatric condition.

The cover image he sees is not the cover image a viewer in Reykjavík sees. The Icelandic operator picked a different still — Hans Gruber, mid-monologue. The Austrian aggregator chose the original German theatrical poster, with a different title, *Stirb langsam.* The streaming service in Iceland that bought the same broadcast rights from Disney has a fourth image, and a description rewritten by a freelance editor two years ago who decided to lead with John McClane's marriage, not the explosions.

Every one of those choices — title, language, image, genre tag, subgenre tag, runtime, parental rating, "you might like" cluster, even the color palette of the still — was made by a human being. There are about 65,000 TV channels in the world, and a few hundred streaming services on top of them, and a single film like *Die Hard* will fan out across maybe 200 of them, in 30-odd languages, with thousands of metadata variants per release. It is, taken together, one of the more thankless jobs in entertainment. It is also a job that, until a year or two ago, was performed almost entirely by people. Editors. Freelancers. Tier-three workers in Manila and Bucharest and Cairo, picking Bruce Willis stills at 3 a.m.

In a building in Copenhagen, a 26-year-old computational physicist named **Anton Gersvang Golles** is automating their job away.

He doesn't put it like that. He puts it like this: *"Hvor svært er det at finde en nål i en høstak? Det afhænger i høj grad af hvor stor høstakken er."* How hard is it to find a needle in a haystack? It depends very much on how big the haystack is.

I caught Anton on a Friday morning in April, eighteen months out of his master's thesis, four months into running the AI function at **Simply.TV** — the Danish B2B firm that supplies that mountain of metadata to operators in roughly sixty countries. He talks fast and quietly, with a physicist's tic of compressing every sentence twice before letting it out, and a slight stammer when he is genuinely excited about something, which is most of the time. His company has, by his account, just crossed a quietly historic threshold: *99-point-x-percent accuracy*, on enough of its features, that the editors have started, for real, to be replaced by software he wrote.

This is what happens, he says, when a physicist learns to compress a quantum state and decides to do it for a living.`
    },
    {
      number: "II",
      title: "THE AUTOENCODER MOMENT",
      content: `If you want to understand how a kid in Copenhagen ends up running the AI strategy of a 450-person multinational at twenty-six, you have to start where Anton starts every story he tells about himself: at the moment he met the autoencoder.

It was a third-year physics project at the **University of Copenhagen** — the same city, more or less the same neighborhood, where Niels Bohr and Werner Heisenberg argued about the meaning of measurement a century earlier. Anton's task was modest by physics standards: take a simulated quantum many-body system — a synthetic chunk of matter — and figure out what *phase* it's in. Solid? Liquid? Some exotic, entangled, topologically-ordered weirdness?

Phase identification is the kind of thing condensed-matter physicists used to do by staring at order parameters for months. Anton, fresh into Python, started the way anyone in an introductory machine-learning class starts: he reached for **principal component analysis**, the workhorse linear-algebra hammer that physicists have been using since before he was born. PCA was fine. PCA was *boring*. PCA could tell him that the cloud of quantum states had structure — but not what that structure *meant*.

Then somebody, probably an advisor or a TA, said the word *autoencoder*.

An autoencoder is a neural network with a waist. Data goes in one side, gets squeezed through a narrow bottleneck of neurons, and is then expanded back out on the other side. The network is trained to make the output identical to the input — which sounds tautological, except that the bottleneck is *too narrow* for memorization. To pass the test, the network has to learn how to compress the data. It has to discover, on its own, the most efficient possible encoding of whatever you feed it. ZIP, but for one specific kind of input. ZIP, but learned.

For most engineers, this is a useful trick — a way to denoise images, or build a recommender, or pre-train a bigger network. For Anton, it was *the* concept. He had been raised on the physicist's definition of a theory: *the simplest possible description of a phenomenon, with no extraneous machinery.* "I fysik laver vi typisk en så enkel afbildning af et fysisk fænomen som muligt," he tells me. *In physics we typically build the simplest possible representation of a physical phenomenon.* Newton's laws aren't true so much as they are *short.* You couldn't fit a more compact description of falling apples on a piece of paper if you tried. The same goes for Maxwell's equations, the standard model, the renormalization group. Physics is, if you squint, a four-hundred-year-old compression contest.

And here was a neural network that, given enough data, would just *do that on its own.* No equations. No insight. No advisor. You shovel in samples, and out the other side comes a learned representation of "the simplest description that lets you reconstruct what you fed me." For a quantum system in transition, the bottleneck would naturally specialize on whatever degree of freedom mattered most for distinguishing one phase from another.

"Hvis funktionen er stor nok," Anton says, "så kunne den jo egentlig lære hvad som helst." If the function is large enough, it could in principle learn anything.

It is a small thing — a Bachelor's-thesis-grade epiphany, the kind of moment most physics students have once and then promptly forget about because they have a thesis defense in eight weeks and quantum mechanics homework is hard. Anton did not forget. The autoencoder, he says, was the moment his career bent. Everything that has happened to him since — the master's pivot from pure quantum to *beregningsfysik* (computational physics), the Rokoko motion-capture work, Halfspace, Simply.TV, the cleaner agent he calls *Dream* — descends from that one realization. *Comprehension is compression.* *Compression is comprehension.* The two are the same thing. And neural networks, given enough capacity and enough data, will find the compression for you.

Two decades earlier, a Latvian-Australian computer scientist named **Marcus Hutter** had put a million euros behind exactly that thesis. The Hutter Prize, awarded for the best lossless compression of a hundred-megabyte chunk of Wikipedia, is, in Hutter's framing, an intelligence test in disguise: any program that compresses Wikipedia to fewer bits is, by Solomonoff and Kolmogorov, a better model of *what English is.* Compression equals understanding. The frontier-AI labs of 2026 do not think of themselves as compression engines, but their best researchers know they are. *The purpose of learning is compression*, Yann LeCun has been saying, more or less continuously, for thirty years. *A good representation is one that captures the essential structure with fewer bits.* Ilya Sutskever has said variations of the same thing on every stage he has ever stood on.

This is the lineage Anton walked into without being told it had a name. It is also, fundamentally, why he is good at his current job. Picking the best image for *Die Hard* across two hundred sources, in thirty languages — that, too, is a compression problem. It just happens to be one that involves Hans Gruber's face.`
    },
    {
      number: "III",
      title: "THE RETURN OF THE PHYSICIST",
      content: `For a long time it was unfashionable to be a physicist who went into industry AI. The deep-learning boom of the 2010s belonged to the computer scientists — to ImageNet, to Hinton's lab in Toronto, to the convolutional-network and transformer hackers who'd spent a decade ignoring physicists' nagging insistence that geometry and symmetry mattered. The breakthroughs came from people who didn't know what a renormalization group was, and who didn't have to.

Then, around 2017, something started to change.

That year, in Switzerland, Giuseppe Carleo and Matthias Troyer published a paper in *Science* called **"Solving the quantum many-body problem with artificial neural networks."** They took a problem condensed-matter physicists had been bashing their heads against for fifty years — calculating the ground state of a chunk of strongly-correlated electrons — and showed that a small neural network could approximate it more accurately than the best variational methods. It was not a quantum computer. It was a classical neural net. And it was beating the field at its own game. The paper sent a small electric shock through the physics community. *Neural-network quantum states.* If a deep network could compress *that* — the most genuinely high-dimensional thing physicists deal with — then maybe the network architectures themselves carried some kind of structural insight about nature.

Around the same time, a quieter parallel thing was happening on the math-physics side. **Tensor networks** — the lineage going back to Steve White's 1992 DMRG algorithm, through Guifré Vidal's MERA, through Frank Verstraete's PEPS — turned out to be doing, formally, almost exactly what deep neural networks do. Compress entanglement. Exploit locality. Build hierarchies. Some of the sharpest theoretical minds in physics — Garnet Chan at Caltech, Miles Stoudenmire at the Flatiron Institute, Jutho Haegeman in Ghent — had been quietly building tools for fifteen years that, if you renamed your variables, looked like the early sketches of modern transformer architectures.

And in 2018, an undergraduate at UT Austin named **Ewin Tang** went one further: she showed that a celebrated quantum machine-learning algorithm, the one that was supposed to give exponential speedups over classical computers, could be *dequantized* — simulated efficiently on a laptop using classical sampling tricks. The quantum advantage evaporated. Tang was nineteen. Scott Aaronson, her advisor, said it was "the kind of result that ruins someone's whole research program." The whole research program got ruined.

The accumulated effect of these moves was, by the early 2020s, to make physics-trained ML researchers extremely valuable. They saw structure where computer scientists saw black boxes. They asked whether a network respected a symmetry, or conserved a quantity, or had a sensible scaling law, and they were almost always right when they said it didn't. *Equivariant neural networks* — networks that bake in physical symmetries — beat their unconstrained competitors on chemistry, on protein folding, on molecular dynamics. **AlphaFold** itself, on the inside, is a very physics-aware piece of software. **FermiNet** and **PauliNet**, two of the most accurate quantum-chemistry methods ever built, are deep neural networks that respect the antisymmetry of fermion wavefunctions.

By 2024 the joke at NeurIPS was that the hottest career path in industrial AI was "had a physics PhD, switched fields." Anton, who has only an MSc but who absorbed the physicist's framing all the way down to his bones, was about to become a small datapoint in that trend.`
    },
    {
      number: "IV",
      title: "THE COMPUTE WALL",
      content: `There is a brief, somewhat painful chapter in Anton's story where he tries to do exactly what the cool physics-into-AI kids were doing, and the universe says no.

His master's thesis was on **text-to-motion**. The setup: take a text prompt — "walk forward four steps and do a salsa twirl" — and generate a sequence of body movements that an animator could drop straight into Blender, Unreal, or Unity. The dataset was supplied by **Rokoko**, the Copenhagen mocap company where Anton was working as a *studentermedhjælper*. Rokoko has, on the quiet, built one of the largest motion datasets in the world: 1.2 million clips, 10,000+ hours, 50,000+ subjects, full body and hands and faces. Most academic mocap datasets are tiny and weird; Rokoko's is enormous and weird in different ways, full of dancing, gesturing, falling-over teenagers from forty countries.

The architecture Anton wanted to train was a **transformer-diffusion model** — a transformer (the now-canonical sequence model) wrapped inside a diffusion process (the technique that lets you generate by progressively denoising). The same family of architectures that, in 2024, would crack image generation and music generation and start to crack video. To train one for motion, on Rokoko's data, would have produced something genuinely new. You could imagine the demos: "a frustrated teenager slumps into a chair," "an elderly man does tai chi badly."

He ran into "ikke at have nok træningskomputer." Not enough training compute.

It is a deflating sentence, because it is the sentence every academic ML researcher in Europe spent the early 2020s saying to themselves. It is the same sentence the Mistral founders were saying around the same time, slightly louder, before they raised seven hundred million euros to fix the problem. There is no nice way to express the gap between what you can do with a GPU under your desk and what you can do with five hundred H100s in a US datacenter. It is roughly the gap between writing letters and writing a novel. The model never reached the quality bar Anton wanted. The thesis got top marks anyway — supervisors love clean failure analyses — but the demo never shipped.

In hindsight, this is exactly the lesson the new generation of European AI engineers needs to learn first, and Anton learned it earliest. *You cannot beat the frontier labs at the frontier.* Stop trying. Find a problem where the frontier labs aren't paying attention. Find a problem where compute is not the limiting reagent — where data quality, or domain knowledge, or unit economics, is what matters. Then build there.`
    },
    {
      number: "V",
      title: "HALFSPACE, AND THE 18-COMPANY KAPITALFOND",
      content: `In November 2024, Anton walked out of his thesis defense and into a job at **Halfspace**, the Copenhagen AI consultancy that had been building a peculiar kind of moat. Halfspace, founded in 2015 by Simon Kristiansen and Kasper Nagel Nielsen, was the place where Nordic enterprise software firms went when they realized their data infrastructure was, on close inspection, made of duct tape. By 2024 they had about eighty consultants, almost all of them with deep STEM backgrounds — physics, math, engineering, biology, chemistry. Anton's thesis advisor got a call: *Have you got any students who are good at AI?* Two were invited to dinner. One was hired.

The work was the kind of work that defines this generation of consultants. Anton built chatbots — "det skulle alle, det ville folk gerne have" *(everyone wanted them, that's what people wanted)* — and he advised companies on how to make their first AI bets. The most interesting client, by his telling, was a **Nordic capital fund** with around eighteen software portfolio companies. He spent months helping them think through the AI transition for each one: what to build internally, what to buy, who to hire, when to wait.

Then, in March 2025, **Accenture bought Halfspace.** All eighty consultants. The Copenhagen office became Accenture Nordic's AI practice. This was a small but real mile-marker in the history of European AI labor: it was the moment that the giant US consultancies decided that the right way to compete with the labs was to vacuum up all the senior practitioners they could find. Halfspace, viewed from one angle, was no longer Halfspace. Viewed from another, it had achieved exactly what it set out to do — get its people deep into Accenture's enterprise rolodex.

By spring 2025, then, Anton was, on paper, an Accenture consultant. In practice he was advising several firms and giving public talks on *agentic coding* — "foredrag på sådan agentic coding og sådan rent gen AI" — to whichever Danish meetup or industry conference would have him. He is, repeatedly and emphatically, *not a classical software engineer.* He has never written a Java application or wrangled a Kubernetes cluster. What he does is sit at the seam between the new generation of LLMs and an organization's legacy of human work, and figure out which jobs are about to dissolve and which ones are about to become ten times more important.

In January 2026, **Simply.TV** asked him to come do that for them. He said yes.`
    },
    {
      number: "VI",
      title: "THE METADATA FACTORY",
      content: `To understand why Simply.TV needs an AI lead — really, why it needs Anton specifically — you have to understand the absurd shape of the modern TV-metadata business.

Imagine a single film. *Die Hard*, since we have already invoked it. *Die Hard* exists, as a corporate object, in roughly ten thousand different metadata records around the world. Every distributor that sells *Die Hard* to a TV channel includes a metadata payload: title, runtime, year, genre, cast, plot synopsis, sometimes images. Every TV channel that buys it then enriches that payload — translates the synopsis, picks a different image, tags it with their internal genre tree, adds a content rating for the local market, schedules it. Every streaming service that licenses it does the same, but for thirty languages. The result is a forest of partly-overlapping, partly-contradictory descriptions of what is allegedly the same movie.

Simply.TV, founded 2018, exists to make sense of this forest. They buy raw metadata from broadcasters, from studios, from third-party data providers. They reconcile it: same title, different translations? Same image, different aspect ratios? They clean it: misspelled actor names, wrong runtimes, mistakenly tagged pornography. They enrich it: pick the best plot synopsis from twenty candidates, choose the most appealing image, write the social-media-ready blurb. Then they ship it back to operators on demand, in the operators' preferred format.

The customers are not glamorous. Mid-tier IPTV operators in Eastern Europe. National broadcasters in countries with three million TV-watching households. Streaming services that license *Die Hard* and need a Polish synopsis by Thursday. Simply.TV doesn't care. They have ~450 employees in ~60 countries, several hundred million metadata operations per day, and — since April 2025, when **Summit Partners** took a majority stake and bundled in the **Red Bee Media Content Discovery Business** — a serious global footprint.

Until ~2024, the engine of all this was human editorial labor. Tier-three editors in low-cost markets, working through job queues: pick the best image for *Die Hard* in Romanian. Pick the best title translation for *Die Hard* in Catalan. Reconcile twenty-seven cast lists. Tag this Italian erotic thriller as *not* family viewing. Each editorial choice took seconds. Repeated billions of times, it became one of the larger pools of structured human-judgment training data outside the major LLM companies' RLHF farms.

This is the dataset Anton inherited.

"Editors eller freelancers," he says, "har valgt mange tier-millioner gange, hvad er den bedste værdi i den her bunke af værdier?" *Editors or freelancers have chosen, many tens of millions of times, what's the best value in this pile of values?* That accumulated record of human choices — the metadata equivalent of "given these twenty image candidates, the editor picked image #7" — is what lets Anton train and, more importantly, *evaluate* the AI replacements.

This is the trick, by the way, that makes the entire enterprise possible. Most companies trying to deploy LLMs for production work die because they have no ground truth — no way to tell whether the LLM did better or worse than the human it replaced, because the human's work was never logged in a structured comparable form. Simply.TV's previous decade of editorial drudgery is, viewed through the right squint, a perfectly-labeled training set of best-of-N preference data on every major aesthetic and informational dimension of TV metadata. They didn't know they were building it. They were building it.

Anton knew exactly what he was looking at when he showed up.`
    },
    {
      number: "VII",
      title: "THE 1/100 PRICE CONSTRAINT",
      content: `Now: economics.

If you process several hundred million metadata operations per day on **GPT-4-class** models — Opus, GPT-4 Turbo, the frontier of April 2026 — the math doesn't work. It doesn't even close. Frontier-model inference at this volume would, depending on the day's pricing, eat between 30% and 200% of Simply.TV's revenue. There is no version of this in which Anton's department is not immediately shut down.

"Vi skal cirka ned i en hundrededel af den pris, for at det giver mening," he says. *We have to come down to roughly a hundredth of the price, for it to make sense.*

A hundredth of the price means **small models.** Specifically, in April 2026, it means **Gemini 2 Flash** — Google's bottom-of-stack workhorse, with prices in the cents-per-million-tokens range — running on Google's own infrastructure. It also means a fleet of open-source models that Anton declines to name on the record but which any reader can guess at: Llama-class, Qwen-class, Mistral-class, the spring-2026 lineup of small, cheap, locally-runnable LLMs that have been getting good enough fast enough that the *frontier* in this benchmark is now a moving target measured in dollars per million tokens.

The architecture is what gets fun.

"Den lille får ligesom lov at prøve at lave løsningen," he says, "men giver både sit svar og en konfidens. Hvor sikker er den på det den siger. Og hvis den ikke er tilstrækkeligt sikker, så træder mesteren ind, som er en faktisk større, dyrere model."

The little one gets to try the solution first. The little one outputs both an answer and a confidence score. If the confidence is high, ship it. If not, escalate to the *master* — a larger, more expensive frontier model — and let it solve the same problem. Most queries — many millions a day — never see a frontier model. The handful that do are the genuinely hard cases: ambiguous translations, adversarial-looking image candidates, unfamiliar genre conventions in obscure markets.

This is, in formal AI-engineering terms, a **cascade architecture**. Cascades are old — Yoav Shoham and others were writing about them in the 1990s — and they are, in 2026, fashionable again. The reason they are fashionable is the same reason they have always worked: most of any production workload is easy, and the expensive model only earns its keep on the long-tail hard cases. Calibrate your confidence threshold correctly, and you get frontier-quality output at small-model prices. Calibrate it wrong, and you either ship low-quality output (threshold too lenient) or you may as well not have built the cascade in the first place (threshold too strict).

Anton's framing is unusually clear about what calibration means. The cascade is **constraint-driven** *and* **quality-driven**, simultaneously. The constraint is the budget. The quality is the user-facing accuracy of the metadata. The cascade lives at the intersection. The work of his AI team — *fire AI engineers, to systemarkitekter, en der kender modelmarkedet*, four AI engineers, two systems architects, one model-market specialist — is largely the work of figuring out, per task, where on the quality/cost frontier each cascade should sit.

There is a fashionable phrase in the AI-architecture literature for this: **discretization hierarchies.** A pipeline of models, from cheap to expensive, with a learned routing function deciding which questions are worth which model's time. Microsoft and Anthropic and OpenAI all sell tools for it now. Anton built his own.`
    },
    {
      number: "VIII",
      title: "THE 80% TRAP",
      content: `I asked him what's hard.

He paused — long enough that I could hear his cat moving — and said: "Det er svært at få de sidste par procent af præcision."

It is hard to get the last few percent of precision.

Here is the thing about generative-AI demos that everyone in this industry knows and almost nobody admits in marketing copy: getting to 80% accuracy is *easy*. Getting to 95% is hard. Getting to 99-point-something is one of the most difficult engineering problems on Earth. It is the problem that has held back self-driving cars for fifteen years. It is the problem that means medical-AI products require multi-year FDA trials. It is, more or less, the entire reason the gap between "wow this is impressive" and "production deployment" remains so vast.

Anton is candid about it. "Det går ikke at ligge på 95% præcision," he says. *95% accuracy is not good enough.* "Man skal op i 99-x%. For ligesom at være på niveau med en professionel editor."

The reason is operational: the customers do not have a uniform tolerance. TV2 will accept some quirky metadata; they're a national broadcaster, not a global one, and their audience is forgiving. Disney+, by contrast, has effectively zero tolerance for a wrong image on a film. A sci-fi fan opening Disney+ to find that *Andor* now displays a poster from an entirely different show will, within minutes, be on social media with screenshots, and Disney+ will be on the phone with Simply.TV. *The single wrong image* is a contractual matter.

This means Anton's team is not really competing with ChatGPT on benchmarks. They are competing with **professional human editors at 99.x% accuracy on hundreds of niche tasks across thirty languages.** It is a much harder problem than "build a chatbot."

The interesting thing is what he says next. He doesn't blame the models. He doesn't say, *if Anthropic shipped Opus-5 we'd be there.* He says: "Det er meget en AI engineering task. Hvordan håndterer vi vores kontekst, spørger vi egentlig om det, vi gerne vil have?"

It's an AI engineering task. How do we handle our context, are we even asking for what we want.

This is the most interesting sentence in the interview, because it cuts against the received wisdom of the entire industry. The dominant framing of 2024–2025 was *if your product isn't good enough yet, wait for the next model.* GPT-4 → GPT-5. Sonnet-3.5 → Opus-4. The frontier labs were going to deliver, and your job as a practitioner was to position yourself well for whatever they handed down.

Anton's view is different. He thinks the frontier's recent improvements have been mostly absorbed by *engineering practice*, not by the models themselves. The cascade architecture, the nightly cleaner agent, the careful attention to prompt design, the relentless curation of context — *that* is where the last few percent of accuracy come from. The models matter, but they are no longer the limiting reagent.

"Jeg ser ikke nogen blokader for, at vi kan opnå den automatisering, vi sigter efter," he says. *I see no blockers to reaching the automation we're aiming at.* "Det er på med arbejdstøjet, og fortsæt rejsen."

Put on the work clothes and keep going.`
    },
    {
      number: "IX",
      title: "DREAM, AND THE NIGHTLY CULL",
      content: `The most quotable artifact in the whole interview is an agent named **Dream.**

Dream is a job that runs every night across Simply.TV's internal knowledge base. It reads through meeting transcripts. It looks for documents that have become redundant — the same fact stored in three places, the same decision recorded twice. It looks for missing links between related documents. It looks for pages that have not been touched in months and asks whether they still need to exist. It then proposes a tidy.

Dream is not a search agent. Dream is not a Q&A bot. Dream is a **garbage collector** for organizational knowledge. It is the specific software response to a specific problem Anton has identified in his year of consulting: *agentic systems make knowledge bases grow faster than they need to.*

The problem, in his telling, is this. When you put a transcription agent on a meeting, and the meeting touches strategy, and somebody mentions their college background — say, that they once studied physics — the transcription agent thinks: *oh, I should make a note. Anton's background. Anton was introduced to programming at the physics department. Why was that.* And then a hundred other meetings, a hundred other little factoids, and within a quarter your knowledge base has tripled in size and most of it is ambient biographical noise.

This kills retrieval. The bigger the haystack — *Hvor svært er det at finde en nål i en høstak* — the harder it is to find what you need. So Dream's job is to *forget*. To prune. To ask, of every accumulated note: does this serve the mission?

He had to rename it. "Jeg har hørt nogle rumors om at der snart kommer en *Claude Dream*," he tells me, deadpan, "så jeg var nødt til at ændre navn." He has heard rumors that Anthropic is about to ship something called Claude Dream, so he had to rename. The new name is *Knowledge Based Cleanup.* He acknowledges this is "ikke lige så fedt." Not as cool. Dream var bedre.

Dream, conceptually, is also the part of his architecture that he says he's most directly building from **Andrej Karpathy's** recent work. Karpathy, the former Tesla AI lead and OpenAI founding member — the patron saint, in Anton's mind, of the modern AI engineer — has spent the spring of 2026 evangelizing what he calls *auto-research* and the *LLM Wiki*: an LLM-powered self-documenting knowledge base that updates itself, summarizes its own contents, and prunes the redundant. Anton's Dream is Simply.TV's instance of that idea, built four weeks after Karpathy first sketched it publicly.

"Andrej Karpathy er for Gen AI og jeg," he says, "hvad Richard Feynman var for fysik."

Andrej Karpathy is, for me and Gen AI, what Richard Feynman was for physics.

This is the kind of sentence that a less self-aware engineer would never say, because it sets the bar so high it becomes a costume. Anton means it. He has watched, repeatedly, Karpathy's three-hour YouTube videos on how to build a language model from scratch — the tokenizer, the backprop, the fine-tune, the RL loop — and he has built things off the back of every one of them.

The fact that Anton names Feynman, of all the physics greats, is also informative. Feynman was the great explainer-physicist of the 20th century — the guy whose lectures cleaned up undergraduate quantum mechanics for two generations of students by making the subject feel as if you, too, could follow it. Karpathy occupies a similar role in the AI field. He is the senior figure who *teaches in public*, on YouTube, in markdown. The lineage is real, even if the analogy is generous.`
    },
    {
      number: "X",
      title: "THE NEW SCHOOL",
      content: `If you ask Anton who he wants to hire, he answers in a way that no one running a software shop in 2018 would have answered.

"Jeg ser rigtig gerne folk, der har været spildesignere eller har læst psykologi," he says.

I'd very much like to hire people who used to be game designers, or who studied psychology.

He says this with the slight smile of a man who knows he is delivering counter-orthodox career advice on the record. He continues. The new generation of AI engineers, in his view, do not need to be classically trained software engineers. They do not need six years of Python on their resume. They do not need to be good at Git — though they should probably learn. What they need is *prompt engineering, context management, system design.*

These are skills, he argues, that map weirdly well to non-engineering disciplines. Game designers — people whose entire craft is about constructing rule systems within which humans (and now agents) navigate goals. Psychology majors — people who have spent four years thinking about how minds, including the minds of LLMs, fail to do what you'd expect. Linguists. Historians. Danish-literature students. *De kunne lige så godt have læst dansk eller historie.* They could just as well have studied Danish or history.

This is, again, counter-cultural. Most enterprise software hiring in 2026 still runs on the muscle memory of 2010 — "six years of Python," "production experience with Kubernetes," "BS in Computer Science or equivalent." These filters, Anton says, are why you will never see the people he wants to hire. They get screened out before they reach the interview, by a recruiter whose KPI is matching keywords.

He does not have unlimited tolerance for the new-school candidates. The flip side of his bias is that they have to be *good* at their thing. *Specialists in the chain we're making.* Not generalists. Not "average at backend, can also build a little agent." His own interview question is the most condensed version of the philosophy I've heard from any modern engineering leader:

> "Når du sidder på kontoret, hvad er det så, de andre kommer til at komme hen til dit bord og spørge om?"

When you sit in the office, what is it that the others are going to come over to your desk to ask about?

If there is no answer — if the candidate cannot articulate a thing they are *visibly the strongest at* on the team — they are not the right hire.

This is, in essence, the entire thesis of the early-stage company: every team member must clearly dominate one slice of the work. *"Otherwise I could just do it myself with my Claude."* The model has, in 2026, become the new junior generalist. The humans worth hiring are the ones who are durably better at *something* than the model is. That floor moves up every quarter.`
    },
    {
      number: "XI",
      title: "THE NEXT PARADIGM: COMPUTER USE",
      content: `I asked him what he was watching, beyond his own backyard.

The answer, half-volunteered: paradigm shifts.

"Skifter vi paradigme igen?" he says. *Are we shifting paradigm again?*

His read on the AI-lab competition, in 2026, runs like this. There was an OpenAI era — broadly 2022 through 2023 — where ChatGPT was the only product and OpenAI was, full stop, the lab. Then there was a Google era — call it 2024 — where Gemini briefly took the cost-and-context lead and looked, for a few months, like the obvious winner. Then we entered the Anthropic era — 2025 to early 2026 — where Claude pulled into a lead in the *coding* paradigm, which is currently the most economically productive thing anyone is doing with frontier models.

But each of those paradigms ended. And the current one, Anton predicts, will end this autumn. The next paradigm, in his view, is **computer use**.

Computer use, in the sense Anton means, is the family of capabilities where an AI agent operates a graphical interface directly: opens a browser, clicks the right element, types in the right input, navigates the right software, drags the right file. Anthropic, OpenAI, xAI, and Perplexity have all been building toward it. Versions of it shipped in 2024 and 2025; they were impressive, slow, brittle. By autumn 2026, in Anton's read, the technology will cross from "tech demo" into "useful workflow."

"Jeg ser det nye paradigme som computer use," he says. "Altså brug af computer med graphical user interface, keyboard og mus, fordi man netop låser op for alverdens opgaver og en meget mere intuitiv brugeroplevelse."

The reason this matters strategically, he argues, is that computer use is an **inferior model with superior tools** beating a **superior model in isolation.** Take a weaker LLM, give it a working hands-on interface to a real desktop, let it inspect its own intermediate outputs by clicking around — and Anton thinks it will outperform a stronger LLM that has to do everything blind.

This is, again, a physicist's argument. A weaker reasoner with feedback loops will outperform a stronger reasoner without them. Cybernetics, basically. The history of engineering, basically. The result is that the labs which currently lead on raw model quality may not lead on the next paradigm, which is about how an agent interacts with the messy, half-broken stack of real-world software.

"Jeg vil ikke bide mig sikker på, at Anthropic er den klare vinder i næste paradigme også."

I would not bet that Anthropic is the clear winner in the next paradigm, either.

This is, depending on your prior, either a contrarian take or a realistic one. The ground truth is that nobody knows. But Anton has done the most useful thing a practitioner can do, which is to *not lock his architecture into any one provider.* Simply.TV switches models constantly above the metadata layer. They run a comprehensive eval framework against new releases. They are, by design, ready to swap out a frontier provider in a week if a competitor leapfrogs.

The strategic implication for everyone else is the same. *Decouple from your provider.* Have an eval suite. Have a fallback architecture. Bet on capabilities, not vendors.`
    },
    {
      number: "XII",
      title: "THREE LEVELS OF BUILDING",
      content: `Late in the interview, after we'd been talking for an hour, Anton sketched a typology of modern software building that I have not heard from anyone else, and which I think is going to be true forever.

Three levels.

**Level 1: Solo.** You're building something for yourself. Anton's example: he was annoyed at paying a subscription for a meeting recorder, so he wrote his own — a Swift app on his Mac that captures both microphone and system audio, transcribes it, and runs analysis. *On a Wednesday.* The whole thing took maybe a few hours of vibe coding with Claude. The constraints are vanishingly low — no security review, no accessibility, no 99.x% accuracy, no legal compliance. The output is good enough for one user (him) and is never going to be touched by anyone else.

**Level 2: In-team.** You're building for a small in-group — five, ten people in a sales department, maybe — who all share the same context. The constraints rise. You need basic reliability. You need shared documentation. But you don't have to think about the rest of the company. *Vi laver noget til os. Den lille indgruppe af måske fem mennesker sidder i en salgsafdeling, vi bygger vores eget setup. Jeg tænker ikke så meget på, hvad det rammer marketing, data pipeline, upstream, downstream. I don't care.*

**Level 3: End-to-end.** You're at HQ. You're optimizing across the whole company. You think about how every component fits with every other component, how cost flows, how data flows, how compliance flows, how the whole system holds together. This, Anton notes ruefully, is *the least fun.* It is also where he sits.

> "Niveau 1 der er den sjoveste. Og så bliver det mere svært og mindre sjovt, desto højere man går."

Level 1 is the most fun. And then it gets harder, and less fun, the higher you go.

This is a useful map. It also explains, almost completely, why so many veteran software engineers and former CTOs have, in 2026, *gone back to Level 1*. They are tired of running enterprise systems. They want to build a stupid little app on a Wednesday and have it work by Thursday. The new tools have made Level 1 so satisfying that mid-career engineers are taking pay cuts to return to it.

Anton points this out and laughs. He is still at Level 3. He is twenty-six. He has time.`
    },
    {
      number: "XIII",
      title: "A FOOTNOTE ON THE RECORDING",
      content: `Halfway through the interview, Anton mentioned — in an aside that was easy to miss — that he had recorded our conversation on his end too, with a tool he had built himself the previous week. He'd been tired of paying ten dollars a month for some commercial meeting recorder, so he wrote a Swift app on his Mac that captured both his microphone and his system audio, transcribed the result, and ran a small analysis pass on the transcript. Vibe-coded, in his own words, in a few hours. Buggy in some places — his agent couldn't reliably interact with the GUI, which is, he noted, exactly the kind of thing computer use will fix. *Hvis det ikke er mening.* If that makes sense.

I tell you this because of what it implies. The recording you are reading from, transcribed and processed for this article, exists in two parallel forms. One was made by me, the interviewer, with a mid-tier consumer recorder. The other was made by Anton, a few feet away from me on a video call, using software he wrote in an afternoon two weeks earlier. He has a full transcript of our interview on his hard drive right now, alongside an LLM-generated analysis of what I said. He does not need to take notes during interviews anymore. He has built his own small replacement for note-taking, the way one might build a footstool.

The interviewer of 2010 would have viewed this as creepy. The interviewer of 2026 should view it as the new baseline. Every senior person you talk to is recording you. Every senior person you talk to has a personal AI staff. The asymmetry of who has these tools — and who doesn't — is becoming, quickly, one of the core class divides in knowledge work.

Anton is on the right side of that divide. He is also one of the people who, by his ordinary day job, is building it.`
    },
    {
      number: "XIV",
      title: "THE PHYSICIST AT WORK",
      content: `I want to close by returning to the autoencoder.

Everything Anton does at Simply.TV is, at the deepest level, the same problem as the autoencoder problem he met in his bachelor's project. *What is the simplest possible representation of this thing that still preserves what matters?* Quantum systems, image candidates, document hierarchies, organizational knowledge bases, prompt contexts, model cascades, hiring rubrics — they are all, formally, the same kind of compression problem. There is some signal worth keeping. There is a great deal of noise that wants to flood in. The job is to keep the signal and discard the rest.

The deeper claim of his career, if he were to ever write it down — which he probably won't, because he is busy hiring four AI engineers and a systems architect — is that the right people for the next decade of AI work are the people who can hold compression and engineering in the same mind. Not pure researchers. Not pure software engineers. The hybrids. The physicists who learned to ship. The game designers who learned to write evals. The psychologists who learned to draw a system architecture diagram.

These hybrids, Anton thinks, are the ones who will build the next layer of agentic infrastructure, because the next layer is about *what to keep, what to throw away, and how to know which is which.* That is, frankly, a question physics has been asking longer than computer science has existed.

It is also, on a less philosophical day, why the cover image of *Die Hard* on TV2 next December 24th will be picked, almost certainly, by software an Anton-shaped person built. It will be the same sweaty Bruce Willis you remember. It will be wrong, probably, in fewer than one in ten thousand cases. The *manager* of the metadata team at TV2 will not know that an autoencoder lives, distantly, in the genealogy of that decision. That is fine. The autoencoder doesn't need credit. It only needs to compress, faithfully, in the right corner of the data, and pop out the right cover.

A physicist — a particular Danish physicist, a former Rokoko intern who once tried to teach a transformer to do a salsa twirl — is, at twenty-six, running the loop. The loop will keep running on Christmas Eve. So will Bruce Willis. So will the Danes on the sofa. None of them, watching, will think about who decided.

That is the trick. That has always been the trick. Compression, when it works, is invisible.`
    }
  ],
  pullQuotes: [
    {
      text: "How hard is it to find a needle in a haystack? It depends very much on how big the haystack is.",
      section: "I"
    },
    {
      text: "Comprehension is compression. Compression is comprehension. The two are the same thing.",
      section: "II"
    },
    {
      text: "You cannot beat the frontier labs at the frontier. Stop trying. Find a problem where compute is not the limiting reagent.",
      section: "IV"
    },
    {
      text: "95% accuracy is not good enough. You need 99-point-x percent. To be on par with a professional editor.",
      section: "VIII"
    },
    {
      text: "Andrej Karpathy is, for me and Gen AI, what Richard Feynman was for physics.",
      section: "IX"
    },
    {
      text: "When you sit in the office, what is it that the others are going to come over to your desk to ask about?",
      section: "X"
    },
    {
      text: "Level 1 is the most fun. And then it gets harder, and less fun, the higher you go.",
      section: "XII"
    },
    {
      text: "Compression, when it works, is invisible.",
      section: "XIV"
    }
  ]
};
