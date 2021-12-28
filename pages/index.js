import Image from 'next/image';
// components
import Header from '../components/header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                The Javelin Method
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              Learn the principles of the Lean Startup method and how to apply
              them to B2B SaaS products.
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h2>Intro</h2>
            <p>
              Research shows 98% of new businesses and startups fail within 5
              years. But if you&apos;re like me, the opportunity to create
              something out of nothing is more important than playing it safe.
            </p>
            <p>
              As an entrepreneur, you&apos;re the only one responsible for your
              success. Only you can inspire others with your vision;
              there&apos;s no better way to develop yourself as a leader.
            </p>
            <p>
              So how do we maximize our chances of success? Luckily, in just the
              last 10 years we&apos;ve developed a greater understanding of how
              to build a successful startup.
            </p>

            <h2>The Pattern of Successful Startups</h2>
            <p>
              A startup is not a small version of a big company. How you manage
              a startup is different than how you manage an existing business.
            </p>
            <figure>
              <Image
                className="w-full rounded-lg"
                src="/theStartupCurve.jpg"
                alt=""
                width={1310}
                height={873}
              />
              <figcaption>
                Credit for &quot;The Startup Curve&quot; goes to Paul Graham,
                founder of YCombinator, one of the most successful startup
                investors in Silicon Valley. YCombinator accelerated startups
                like AirBNB, Dropbox, Stripe, and many others.
              </figcaption>
            </figure>
            <p>
              According to Paul Graham, every successful startup follows this
              pattern. They go through something called the &quot;Trough of
              Sorrow,&quot; where they don&apos;t know if all of their hard work
              is going to lead them to the dream they have set out for
              themselves.
            </p>
            <p>
              Most startups fail in the Trough of Sorrow, a few pivot and get to
              the part where something starts working, but only 2% will make it
              to Product/Market Fit.
            </p>
            <p>
              Product/Market Fit is when your startup has found a product the
              market needs.
            </p>

            <h2>The Javelin Method</h2>
            <p>
              Most startups fail because they waste time and money building
              something customer&apos;s don&apos;t need.
            </p>
            <figure>
              <Image
                className="w-full rounded-lg"
                src="/theJavelinMethod.jpg"
                alt=""
                width={1310}
                height={873}
              />
              <figcaption>
                The Javelin Method is not the only one, but we strongly believe
                it&apos;s the most effective one.
              </figcaption>
            </figure>
            <p>
              Most entrepreneurs approach starting a business in the opposite
              way from The Javelin Method. They start by coming up with a
              &quot;Big Idea&quot; or solution first. Then they work backwards
              to figure out what customer problem it solves.
            </p>
            <p>
              This way is sure to lead to disaster 98 out of 100 times. Because
              every customer has a problem and every problem has a solution, but
              not every solution solves a problem. Furthermore, not every
              problem has a customer who cares to solve it. A solution or
              problem without a passionate customer will never grow to a
              successful business.
            </p>
            <p>
              The goal of The Javelin Method is to first ask, &quot;Who is the
              customer I know best and can reach easily?&quot; When you know the
              customer already and can reach him or her easily, you can learn
              faster and get to Product/Market Fit faster. Speed is everything
              in a startup.
            </p>
            <p>
              While passion in an idea is needed to be an entrepreneur, passion
              for a customer is far more important. When you love your customer,
              a group of people with real problems, you will have a deeper
              motivation to succeed.
            </p>
            <p>
              The Javelin Method is designed to maximize your chance of success.
              We would rather every entrepreneur have a 98% chance of a small,
              but successful business, than a 2% chance of a large business.
              Many of the greatest entrepreneurs, take Elon Musk of Tesla for
              example, only made $22M from his first business. His second
              business made him $165M, and his businesses after that made him a
              billionaire.
            </p>
            <p>
              You have a lifetime to be an entrepreneur. Many entrepreneurs take
              five to ten years of their lives for their first business and end
              up with no money in their bank account after all that time. We
              don&apos;t want that to happen to you. While $5M to $10M
              won&apos;t make you the next Elon Musk (right away), it will
              change your life and open a world of freedom to you in the future.
            </p>

            <h2>The Pivot Explained</h2>
            <p>
              You can&apos;t come up with the best business by sitting in a room
              thinking. You have to get out of the building and learn from real
              customers.
            </p>
            <figure>
              <Image
                src="/howToPivot.jpg"
                alt="How to pivot"
                width={1310}
                height={873}
              />
              <figcaption>
                This is the correct way to pivot. Start with a customer and
                through the process of experimentation, systematically find the
                biggest problem and business opportunity.
              </figcaption>
            </figure>

            <p>
              One of the three principles of the Lean method is The Pivot. A
              pivot means to change your strategy based on what you learn from
              your customer. It does NOT mean to change your vision. It does NOT
              mean to change your idea because you feel like it. You can only
              pivot after you run an experiment and learn something from
              customers which tells you to change your idea.
            </p>
            <div id="the-wrong-way-to-pivot" />
            <p>
              Unfortunately, even when we teach the Lean method in our
              workshops, many entrepreneurs are too obsessed with their
              &quot;Big Idea&quot; to truly follow this process. Instead, they
              take their solution and spend multiple experiments trying to fit
              that solution to a customer.
            </p>
            <div className="thumbnail" id="the-wrong-way-to-pivot">
              <div className="image-color">
                <Image
                  src="/wrongWayToPivot.jpg"
                  alt="Wrong way to pivot"
                  width={1310}
                  height={873}
                />
              </div>
              <p>
                We call this pattern, &quot;Solution in search of a
                customer.&quot; An entrepreneur can spend his entire life
                looking for a customer for his solution and never find one.
                It&apos;s a pattern we&apos;ve seen hundreds of times result in
                failure.
              </p>
            </div>
            <p>
              Ideas have no value by themselves. Too many stories about great
              innovators focus on the idea. They forget most great innovations
              and great startups started somewhere completely different from
              where they ended up.
            </p>
            <p>
              Instagram started as a social network for restaurants and other
              places, but they pivoted to photos. Twitter started as a
              podcasting website named Odeo, when that idea failed the team
              pivoted to work on Twitter. YouTube started as a dating website,
              when that failed the team pivoted to work on YouTube. Paypal
              started as a payment service on the Palm Pilot mobile phone, when
              that failed they pivoted to focus on email-based payment. I could
              go on and on listing more examples.
            </p>
            <p>
              Every successful founder started with a strong vision and idea.
              But when the idea failed, they were flexible enough to try
              something different and then put their energy into the thing that
              worked.
            </p>
            <p>
              Successful entrepreneurs don&apos;t try to change the market,
              that&apos;s impossible. They try to find the market and capture it
              as it is. You will be much more successful focusing on an &quot;OK
              idea&quot; that is easy to execute instead of a &quot;brilliant
              idea&quot; that is difficult to execute.
            </p>
            <div id="idea-times-execution" />
            <p>
              The below is a chart introduced to me almost 10 years ago by one
              of my mentors, Lawrence Lenihan. Larry is a seasoned venture
              capitalist in New York and was one of the first investors in
              Pinterest, League of Legends, and many other successful companies.
            </p>
            <div className="thumbnail" id="idea-times-execution">
              <div className="image-color">
                <Image
                  src="/ideaTimesExecution.jpg"
                  alt="Idea times execution"
                  width={1310}
                  height={873}
                />
              </div>
              <p>
                The thing that makes a successful entrepreneur is execution. A
                brilliant idea with bad execution is worth at most $20. But an
                OK idea with OK execution is worth $50,000. With good or great
                execution an OK idea can be worth $500,000 or $5,000,000.
              </p>
            </div>
            <p>
              Ask any successful entrepreneur what&apos;s more important:
              brilliant idea or brilliant execution. I have asked dozens myself
              over the years, and I&apos;ve never heard one say an idea is more
              important than execution.
            </p>
            <p>
              Everyone has ideas. Ideas are a dime a dozen. In fact, someone has
              probably already thought of the best idea you are thinking of
              right now.
            </p>
            <div id="how-javelin-works" />
            <p>
              Focusing on your customer instead of your solution will
              immediately improve your execution by 1 or 2 levels. So if you
              want to be successul, don&apos;t choose your best idea, choose the
              idea your customers need.
            </p>
            <h2>Javelin&apos;s Three Stages</h2>
            <p>
              Javelin is a flexible but focused platform to help your business
              find Product/Market Fit.
            </p>
            <div className="thumbnail">
              <div className="image-color">
                <Image
                  src="/stages.jpg"
                  alt="Javelin stages"
                  width={1310}
                  height={873}
                />
              </div>
              <p>
                When you start a new project with Javelin, the first step is to
                choose your stage. One stage gives you the answers you need to
                solve the next. Most entrepreneurs who haven&apos;t learned Lean
                make the mistake of skipping the first two stages.
              </p>
            </div>
            <h2>1. Idea Stage</h2>
            <p>
              The idea stage is where most projects should start. It&apos;s
              right after you have the &quot;aha&quot; moment and want to figure
              out if you can find customers for your idea. Here we want to
              interview different customer segments to figure out who (if
              anyone) has the biggest problem we can solve. Interviewing
              customers is a skill and we&apos;ll go into how to do it properly
              in another section.
            </p>
            <p>
              In the idea stage we want to avoid showing customers solutions or
              selling them. We want to ask them, &quot;What is the best solution
              to your problem?&quot; To see if we think the same way they do.
              Most of the time they will have much simpler needs than we
              anticipate.
            </p>
            <div id="cost-of-experimentation" />
            <p>
              Interviews are the fastest way to learn if we&apos;re going in the
              right direction and make it easy to pivot our customer or problem.
            </p>
            <div className="thumbnail">
              <div className="image-color">
                <Image
                  src="/theCostOfExperimentation.jpg"
                  alt="The cost of experimentation"
                  width={1310}
                  height={873}
                />
              </div>
              <p>
                The fastest startup usually wins. Following the Javelin Stages
                won&apos;t only save us money, it will save us tremendous time
                and allow us to move faster.
              </p>
            </div>
            <h2>2. Solution Testing</h2>
            <p>
              Solution testing comes after you&apos;ve validated your customer
              and the biggest problem he needs solved. You have example of real
              people who you should target and you&apos;ve discovered patterns
              in the market place.
            </p>
            <p>
              In solution testing, we want to get customers to sign-up for our
              product on a simple landing page and pay us before we build the
              product. By definition, early adopters are happy to pay in advance
              for an innovative solution to their unsolved problem. Our landing
              page allows us to test if customers will actually pay and at what
              price before we invest time and money in building a solution.
            </p>
            <h2>3. Product Stage</h2>
            <p>
              In most cases, we can start the product stage before writing any
              code. The most important thing is to simply solve the
              customer&apos;s problem in a way that is repeatable and see if the
              customer is satisfied with this solution. We&apos;ve seen many
              customers sign-up for a solution on a landing page that got the
              value proposition correct, we&apos;ve even seen those same
              customers pay hundreds for the solution. But if the entrepreneurs
              don&apos;t first take just one or two customers through the
              process of solving their problem, they miss important details
              below the surface and end up creating the wrong product.
            </p>
            <div id="javelin-step-by-step" />
            <p>
              We recommend teams solve the problem as a service, using their own
              team as the laborers, before they write software. If this concept
              is a bit confusing to you right now, we will go into depth on how
              to do it later. But the idea here is to build as little technology
              as possible to service your first customer. You don&apos;t need to
              be able to scale to thousands or millions of customers here. We
              want to test if our product is viable with just our first twenty
              paying customers.
            </p>
            <p>
              After each full cycle of serving a customer we survey that
              customer using the Product/Market Fit Survey. We want to know that
              our product is something our customers can&apos;t live without
              before investing our life in it. Building a product that&apos;s a
              &quot;nice-to-have&quot; rather than a &quot;must-have&quot; is a
              risk that we should never take.
            </p>
            <div className="thumbnail">
              <div className="image-color">
                <Image
                  src="/stepByStep.jpg"
                  alt="Javelin step by step"
                  width={1310}
                  height={873}
                />
              </div>
              <p>
                We learn a lot by doing interviews and customer trials, but the
                moment of truth comes when we actually look at the numbers for
                our signups and product/market fit score.
              </p>
            </div>
            <p>
              Step by step the Javelin process looks like this. We use
              interviews to hone in on a solution and then test that solution
              with one or more landing pages. If we don&apos;t get the signups
              we expect, we go back to interviews to figure out what went wrong.
              The fact that customers don&apos;t sign-up for our landing page
              won&apos;t tell us much. We need to go back to interviews.
            </p>
            <div id="understanding-product-market-fit" />
            <p>
              In the same way, sometimes we need to try a completely different
              product for our Customer Trials. This is what happened to us
              through multiple versions of Javelin. Customers will tell us what
              they don&apos;t like or why something doesn&apos;t fit their
              needs, but they won&apos;t tell us what we should build. That
              requires our own judgement and vision to test a new product
              direction.
            </p>
            <h2>What is Product/Market Fit?</h2>
            <p>
              Reaching Product/Market Fit is difficult, but we must find it
              before we can grow our business sustainably. Here&apos;s how to
              approach Product/Market Fit systematically.
            </p>
            <div className="thumbnail">
              <div className="image-color">
                <Image
                  src="/productStage.jpg"
                  alt="Javelin product stage"
                  width={1310}
                  height={873}
                />
              </div>
              <p>
                The Product/Market Fit Survey is the most powerful baseline for
                measuring and reaching Product/Market Fit.
              </p>
            </div>
            <p>
              For a new product, there&apos;s no operating history to use to
              estimate our future performance. We honestly don’t know what will
              work. We&apos;re experimenting and pivoting until we have the
              right product in the right market. We can’t grow to be a large
              business without this. So this begs the question, “How do we know
              when we are close to Product/Market Fit, and how do we know when
              we have arrived?”
            </p>
            <div id="pmfit-qualitative" />
            <p>
              To measure Product/Market Fit it is essential to use both
              qualitative and quantitative measures. Quantitative is most
              powerful as a basis for comparison, and by looking at quantitative
              measures over years of experience, we can revisit past decisions
              to consistently improve our judgement. But without qualitative
              measures, quantitative measures can result in false positives.
            </p>
            <h2>Qualitative Measures</h2>
            <p>
              When it comes to qualitative metrics, the exact context of every
              product is different but we&apos;re always trying to measure the
              same thing. We want to know if our customer has used our product
              to achieve the job our product is meant to do. This is how we
              avoid false positives. This is the difference between whether our
              customer loves the idea of our product or the result. This is not
              the same thing. Only if our product delivers a result for our
              customer can we move forward to measuring Product/Market Fit
              quantitatively.
            </p>
            <div id="pmfit-quantitative" />
            <p>
              Product engagement can be a leading indicator that our product
              delivers on it’s intended job, but it’s not causal in every case.
              For this reason I advise startups against heavy-duty analytics
              like Google Analytics. They are a distraction in this phase. We
              don’t need to optimize our onboarding or acquisition funnels at
              this time. Early adopters are smart enough to use a Minimum Viable
              Product if it just gets the job done. It doesn’t need to be hassle
              free. And we only need a couple dozen proof points to know whether
              our product has failed its early adopters.
            </p>
            <p>
              This can be done even for a network effects based business.
              We&apos;ll explain later how to test network effects on a small
              scale.
            </p>
            <h2>Quantitative Metrics</h2>
            <p>
              The quantitative measure is my favorite part, it’s the closest
              thing to a silver bullet in disruptive innovation. It&apos;s why
              we built the Product/Market Fit Survey into Javelin. As long as
              our product has delivered on it’s intended job for our early
              adopters, a result we are proud of, we can move on to the moment
              of truth.
            </p>
            <p>
              How disappointed would existing customer be if our product no
              longer existed? This is the key question we want to ask. It will
              tell us whether or not our product is solving an unmet need. If
              our customers can live without our product, then we are not
              unique. Our customers lives are just fine without us, they either
              don&apos;t have a big enough problem or there are other products
              in the market which work just fine.
            </p>
            <div id="product-market-fit-questions" />
            <p>
              As opposed to Net Promoter Score, which will tell us how happy our
              customers are, this question will tell us how important our
              product is to our market; in other words, whether we have found
              Product/Market Fit.
            </p>
            <div className="thumbnail">
              <div className="image-color">
                <Image
                  src="/productMarketFitQuestions.jpg"
                  alt="Product market fit questions"
                  width={1310}
                  height={873}
                />
              </div>
              <p>
                The key to Product/Market Fit is finding a product customers
                can&apos;t live without and changing our messaging and
                positioning to attract that customer.
              </p>
            </div>
            <p>
              When we use Javelin&apos;s Product/Market Fit Survey, we&apos;re
              looking for at least 40% of our customers to say they would be
              &quot;Very Disappointed&quot; without our product. If we reach the
              40% magic number, we can be assured that our product will grow
              sustainably. In my experience, a software as a service (SAAS)
              product that reaches this number can grow into a $10M+ annual
              revenue business.
            </p>
            <p>
              Products in the 20% range should strongly consider going back to
              the drawing board and pivoting. This is what happened with our
              last product, QuickMVP. While some products in the 20% range can
              be marketed really well and grow near the $1M annual revenue mark
              (QuickMVP reached $250k in three months), they are not products
              that customers truly need. You should spend a couple months
              improving the product to see if you approach the 30% mark,
              otherwise pivot based on what you know about customers.
            </p>
            <p>
              Products in the 30% range should look at the feedback from
              questions #2 and #3 to seek more significant differentiation from
              alternatives. They should focus on improving the product for
              customers who answered &quot;Somewhat Disappointed&quot; in
              question #1 and changing their messaging to discourage those who
              answered &quot;Not Disappointed&quot; in question #1 from using
              the product. Products in the 30% range may be able to reach the
              $5M annual revenue mark, but are unlikely to get much bigger.
            </p>
            <p>
              Product and messaging improvements can take a product in the 30%
              range to over 40% within six months. But it&apos;s important to
              track this score on a monthly basis to see how quickly the score
              is improving. You can use Javelin&apos;s Monthly Progress Report
              to track the improvements in Product/Market Fit and compare these
              improvements to the features you released in your product that
              month.
            </p>
            <div id="customer-segments" />
            <p>
              No matter where you start from the first survey, if after two to
              three months the score does not improve, it&apos;s time to pivot.
            </p>
            <h2>Customer Segments</h2>
            <p>
              The heart of Javelin is its customer segments tool. Every
              experiment and decision you make starts with the customer.
            </p>
            <div id="defining-segments" />
            <div className="thumbnail">
              <div className="image-color w100">
                <Image
                  className="w100"
                  src="/customerSegments.gif"
                  alt="Javelin customer segments"
                  width={1310}
                  height={873}
                />
              </div>
              <p>
                This is your Customer Segments dashboard. Here you decide who to
                focus on and track your progress over time.
              </p>
              <p>
                #1 = Adding Customer Categories. #5 = Toggle ON/OFF the
                Estimates or Progress tables.
              </p>
            </div>
            <h2>How to Define Customer Segments</h2>
            <p>
              Simply, a customer segment is a group of customers who are the
              same in the eyes of our business. In traditional marketing,
              customer segments are usually based on demographics such as age,
              gender, and income level. This is fine for an existing business
              with lots of data on its customers, but not for a startup.
              Existing businesses can segment their customers to a greater
              degree than we can, and it would be over-complicating things for
              us to do it that way.
            </p>
            <p>
              Every startup is different in the criteria it will use to segment
              its customers. Primarily, we are looking to group customers based
              on common problems (pains, pleasures, jobs). We want to separate
              different groups who will use our product in different ways or for
              different benefit. We also want to look broadly enough so that we
              can choose between different directions to focus our efforts. We
              need to figure out how to choose between customer A and customer
              B.
            </p>
            <p>
              Javelin&apos;s customer segments tool is meant to be flexible to
              suit the needs of many different businesses at different stages.
              For this reason you should be generous in defining new customer
              segments and customer categories. Duplication is also ok. This is
              a living and breathing dashboard that will evolve as you conduct
              more experiments and add more data about your customers. The most
              important thing is to make this tool useful for yourself and your
              team.
            </p>
            <p>
              <strong>Customer categories</strong>
              allow you to put context around a group of customer segments. For
              example, a business in the Product Stage may have a category for
              &quot;Existing Customers.&quot; And within this category drill
              down into the different types. A business in the Idea Stage may
              make a category for &quot;Small Businesses&quot; and a categoy for
              &quot;Consumers&quot; then run experiments to figure out which
              directions is the better one to pursue.
            </p>
            <p>
              Customer categories and segments are not strict in their
              differences. In fact, every customer segment can also be a
              customer category or vice versa. The level of depth you want to go
              into is up to you. One customer segment can exist as both
              it&apos;s own category and as a segment within another category.
              In fact, it might be helpful over time to move validated segments
              into their own categories so you can drill in deeper.
            </p>
            <div id="estimates" />
            <p>
              Organize your customer segments like you organize your mind and
              decision making about your business. Be generous in your use of
              this tool and update your customers categories and segments over
              time. If you do this, your decision making and thinking about your
              business will become better and better.
            </p>
            <div className="thumbnail">
              <div className="image-color">
                <Image
                  src="/theCustomerSegment.jpg"
                  alt="The customer segment"
                  width={1310}
                  height={873}
                />
              </div>
              <p>
                When you click, &quot;Edit&quot; on a customer segment from the
                customer segments tool, you are taken to a dashboard for the
                individual segment.
              </p>
            </div>
            <p>
              Each customer segment is a living and breathing document where
              your team will build on it&apos;s understanding of each customer.
            </p>
            <h2>1. Name &amp; Status</h2>
            <p>
              You can edit the name of your customer segment at any time. It is
              important to keep customer segments up to date and define your
              customer segment in a specific and concise way. You want the name
              of your customer segment to be easy for everyone on your team to
              know exactly who you are talking about.
            </p>
            <p>
              Here you can also edit the status of this customer segment. There
              are four different states: Untested, Testing, Validated, and
              Invalidated. When you start a new experiment with a customer
              segment, it will automatically go from Untested to Testing. It is
              up to you to determine when a customer segment is Validated or
              Invalidated.
            </p>
            <p>
              There is no minimum or maximimum number of experiments needed to
              Validate or Invalidate a segment. The only person who can apply
              meaning to your data is you. An experienced Lean mentor will be a
              useful guide in making this decision, but ultimately you must make
              your own judgement. The benefit of Javelin is that over time your
              judgement will improve and your experience will allow you to look
              back on your data with new eyes.
            </p>
            <h2>2. Estimates: Pain, Market Size, &amp; Ease of Access</h2>
            <p>
              Javelin&apos;s estimates tool allows you to intuitively prioritize
              which customer segments to start with. Choose a value between 0
              and 10 for each criteria and Javelin will multiply the values
              together to rank your segments in order of priority. For customer
              segments, these values are relative to each other, not absolute.
              For example, the customer segment with the greatest Pain should be
              rated a 10 and all others should be rated relative to the pain of
              that segment. We use these three criteria because we find them
              most relevant and helpful to entrepreneurs.
            </p>
            <p>
              <strong>Pain</strong>
              is how big the problem we&apos;re trying to solve is for this
              segment. Does this segment have a significant inconvenience or
              emotional burden caused by this problem? Are there currently no
              good ways to fix this problem for this segment? How important is
              solving this problem to this segment? These are all questions
              which can help you figure out how to estimate a segment&apos;s
              pain.
            </p>
            <p>
              The bigger the pain, the more likely a segment will be our early
              adopters. Customers with a lot of pain will be extremely happy and
              passionate about our business if we are able to help them. The
              bigger the pain our business solves, the more likely it will be
              successful.
            </p>
            <p>
              <strong>Market Size</strong>
              is the size of the market for this customer segment. How many of
              this type of customer are there? How much can they afford to pay?
              We recommend a bottom-up market sizing approach for this estimate.
              The bigger our market size, the bigger our business can grow.
            </p>
            <p>
              <strong>Ease of Access</strong>
              is how quickly and easily we can talk to or reach this segment. In
              a startup, speed is everything. One of the biggest mistakes you
              can make is choosing a customer segment that is difficult for you
              to reach. Even if the market size and pain is huge, if you
              can&apos;t reach your customer you will never be successful. This
              is a very personal estimate which is different for every team.
            </p>
            <p>
              Part of being Lean is not just understanding your customer, but
              understanding your own team. You are the most important part of
              your business because everything is dependent upon you. One team
              may be well-suited to target a specific customer segment, whereas
              another team may not be. If you are targetting a customer segment
              that you can not access easily, you are making a fatal mistake for
              your business. Remember, it&apos;s not the idea that matters, but
              your execution of the idea. Your ease of access to customers is
              key to your successful execution.
            </p>
            <div id="real-persons-notes" />
            <h2>3. Hiding Estimates</h2>
            <p>
              If you do not need to prioritize your customer segments, or you
              find that these estimates are not helpful to your situation, you
              can easily turn them off. This will give your customer segments
              dashboard a cleaner look, rather than displaying a bunch of
              zeroes.
            </p>
            <h2>4. Real Persons</h2>
            <p>
              Real Persons are your personas of actual customers. While a
              customer segment name is an abstract definition, a real person
              makes a customer segment concrete. By listing people you know who
              represent your customer segment you allow a more productive
              discussion with your team about who you are targetting.
            </p>
            <p>
              In this way, Javelin acts like a database or CRM (customer
              relationship management) for your validation activities. As you
              interview people, you want to remember the individuals who
              represent the ideal example of your customer segment. Javelin
              allows you to describe these individuals in detail and why they
              represent your customer segment. You can also store their email
              and personal website so you anyone on your team can learn more
              about this person or get in contact with him or her.
            </p>
            <h2>5. Notes</h2>
            <p>
              Notes are where you write down important learnings and discuss
              your customer segment with your team. Think of it like a summary
              for your interviews or anecdotal interactions with this customer.
              When you want to remember something or keep a reference to
              something important, you can add it to the notes section. Notes
              also allow you to link to specific interviews or other resources
              (ie. Google Docs, blog articles) about your customer.
            </p>
            <h2>6. Experiments</h2>
            <div id="interviews" />
            <p>
              Your customer dashboard also keeps track of the specific
              experiments you have conducted on that customer segment. You can
              easily create a new experiment for this customer segment here and
              view a list of the experiments specific to this segment.
            </p>
            <h2>Interviews</h2>
            <p>
              Interviewing customers takes time and skill, but is the fastest
              and most powerful way to learn if our business will be viable.
            </p>
            <div className="thumbnail">
              <div className="image-color">
                <Image
                  src="/howToInterviewCustomers.jpg"
                  alt="How to interview customers"
                  width={1310}
                  height={873}
                />
              </div>
              <div id="leading-questions" />
              <p>
                We interview customers like detective Sherlock Holmes. We
                don&apos;t trust what customers say, but we look for facts and
                try to make our own judgement about the truth.
              </p>
            </div>
            <p>
              Interviewing customers is a skill that takes practice to get good
              at it. A good interviewer is a good detective. Someone that looks
              for the facts with a critical mind, and does not look to confirm
              his or her own beliefs. You have to approach interviews with a
              long-term mindset. It is very likely your idea is not viable and
              you need to look for that in your interviews. Do not rush the
              interviewing stage.
            </p>
            <h2>Leading Questions</h2>
            <p>
              The biggest mistakes entrepreneurs make when interviewing
              customers is asking
              <strong>leading questions.</strong>
              If we approach interviewing in order to confirm our own beliefs,
              we are surely to find what we are looking for. But this will lead
              to disaster for our startup.
            </p>
            <p>
              Leading questions are any questions that ask for feedback or
              opinions. These questions are hypothetical in nature and can be
              helpful to hone in on facts, but feedback should be taken with a
              grain of salt. We can not trust the success of our business on a
              customer&apos;s feeling about something. But we can trust a
              customer&apos;s current or past behavior. What a customer has done
              in the past, such as recent stories about their experience of a
              problem, will tell us what they will do in the future and whether
              or not our business can be viable.
            </p>
            <div className="thumbnail">
              <div className="image-color">
                <Image
                  src="/getTheFacts.jpg"
                  alt="Get the facts"
                  width={1310}
                  height={873}
                />
              </div>
              <div id="the-riskiest-assumption" />
              <p>
                Opinions are not facts. Sherlock Holmes does not ask people,
                &quot;Who do you think the murderer is?&quot; He asks them,
                &quot;Where were you on the night of the murder?&quot;
              </p>
            </div>
            <h2>The Riskiest Assumption</h2>
            <p>
              When creating an Interviews Set, Javelin asks you to define the
              riskiest assumption. Every business idea is based on the
              inspiration of an individual or team. And inspiration comes from a
              certain way of looking at the world, also known as assumptions
              about the world. Most of the time, the riskiest assumption is
              simply why you assume the problem exists. It&apos;s important to
              define your problem hypothesis in specific terms, and it is even
              more important to create a logic for how you came up with your
              problem hypothesis.
            </p>
            <div id="interview-ui" />
            <p>
              You must define your riskiest assumption in a way that if your
              riskiest assumption is false then your problem hypothesis is also
              false and your idea is not viable. In this way, every problem
              hypothesis has multiple risky assumptions, but you should focus on
              the one most likely to be wrong. The purpose of your interviews is
              to discover the truth about your riskiest assumption. Not to
              confirm it, but to critically test it to see if it will hold up
              against all forms of scrutiny.
            </p>
            <h2>Javelin&apos;s Interview UI</h2>
            <div className="thumbnail">
              <div className="image-color">
                <Image
                  src="/customerInterviews.jpg"
                  alt="Customer interviews"
                  width={1310}
                  height={873}
                />
              </div>
              <p>
                Javelin is designed to make conducting and analyzing your
                customers interviews as easy as possible.
              </p>
            </div>
            <h3>1. Interview Script</h3>
            <p>
              When you start a new interviews set, it&apos;s important to create
              an interview script with your team. This is meant to make your
              interviews consistent and focused around your riskiest assumption.
              It&apos;s also to help your team avoid asking leading questions.
            </p>
            <p>
              GOOD questions ask about specific past experiences the customer
              has had. They start with &quot;the last time you...&quot; and ask
              when, how, and why. BAD questions start with &quot;would
              you...&quot; or &quot;do you...&quot; and focus around
              people&apos;s feelings and opinions.
            </p>
            <p>
              Your interview script can be edited or updated at any time and
              easily copied over to your interview notes for easy completion.
            </p>
            <h3>2. Interview Notes</h3>
            <p>
              Interview notes are where you record the answers to the questions
              in your script. But keep in mind your interview script is not
              sacred, it is just a starting point. If you conduct interviews and
              only ask the questions on your script, you will surely miss the
              most important learnings. Good interviews are a conversation with
              your customer and are meant to be open-ended.
            </p>
            <p>
              You should generously write down observations about your customer
              in the notes. It&apos;s not enough to just have them answer the
              questions, you want to also write down as much about their
              background and what type of person they are. By knowing your
              customers background, you can better interpret the stories and
              experiences they share with you.
            </p>
            <p>
              Please note interviews are not currently saved in real time. You
              must click &quot;Save Interview&quot; in order to save your notes.
            </p>
            <h3>3 and 4. Scoring Interviews</h3>
            <p>
              One of the most powerful tools we provide in Javelin is our
              interview scoring methodology. First created by Lean Analytics
              author and Javelin investors, Ben Yoskovitz, problem scoring is
              meant to help you understand if the interviewee is a real early
              adopter for your product. By answering 5 simple questions, we
              create a &quot;problem score&quot; for your interview and display
              that score at the top your interview. This tool should be used as
              a basis for comparison across customers and segments.
            </p>
            <div id="early-adopters" />
            <p>
              Interviews can only be scored after they are saved. So you will
              not be able to score an interview from the new interview screen.
            </p>
            <h2>Early Adopters</h2>
            <div className="thumbnail">
              <div className="image-color">
                <Image
                  src="/earlyAdopterDefinition.jpg"
                  alt="Early adopter definition"
                  width={1310}
                  height={873}
                />
              </div>
              <p>
                The true purpose of interviews is to find early adopters. If you
                can&apos;t find early adopters, your business can not be
                successful.
              </p>
            </div>
            <p>
              In traditional marketing, we want to do market research to
              understand where the market is today. But in customer development
              and Lean, we want to find early adopters to understand where the
              market will be tomorrow. We are fundamentally trying to predict
              the future.
            </p>
            <p>
              Early adopters are not the same as &quot;techies.&quot; Don&apos;t
              confuse the two. Whether or not they are young and read technology
              blogs has nothing to do with it. Early adopters are individuals on
              the leading edge of an industry. They tend to be extremely smart
              and experienced at their craft. So they either are dissatisfied
              with the current tools available, lack the right access to them,
              or they&apos;re just trying to do things in a new and better way.
            </p>
            <p>
              Early adopters also don&apos;t care about brand names. They are
              smart enough to try out multiple different products themselves and
              decide which ones are best. They enjoy trying a buggy or ugly
              product in the beta or alpha stage because they want to be first.
              They are the person who their friends ask for recommendations on
              new products.
            </p>
            <p>
              We find that many entrepreneurs don&apos;t think carefully enough
              about early adopters. They get stuck in thinking about the mass
              market. But startups don&apos;t care about the mass market until
              after Product/Market Fit. This is one of the reasons why startups
              launch too late or focus too much on marketing and design. For
              early adopters, the only thing that matters is if your product
              solves their problem. Marketing, design, and branding don&apos;t
              matter to them so don&apos;t waste your time on it.
            </p>
            <div id="landing-pages" />
            <p>
              Organic growth comes from the word of mouth of early adopters.
              Because these customers are highly loyal and influencers,
              capturing the market of early adopters is one of the most
              important competitive advantages a startup needs.
            </p>
            <h2>Landing Pages</h2>
            <p>
              Landing pages are the first &quot;moment of truth&quot; to test if
              you understand your target customer segments and can get them to
              pay for your solution.
            </p>
            <div className="thumbnail">
              <div className="image-color">
                <Image
                  src="/landingPageBuilder.jpg"
                  alt="Javelin landing page builder"
                  width={1310}
                  height={873}
                />
              </div>
              <p>
                Javelin&apos;s advanced landing page builder includes several
                professional templates and in-depth customization.
              </p>
            </div>
            <p>
              With a landing page, we test to see if we can get customers for
              our product before we invest the time and money in building it.
            </p>
            <h2>1. Sidebar</h2>
            <p>
              You can open the sidebar by clicking on the &quot;&lt;-
              Options&quot; button in the bottom left of the screen.
            </p>
            <p>
              The sidebar allows you to edit the colors of your landing page,
              the number of pricing plans, the signup thank you confirmation
              text, as well as the call-to-actions for the Contact Us link (top
              right), pricing plan &quot;choose&quot; button, the signup form
              &quot;signup&quot; button, and the contact form &quot;send&quot;
              button.
            </p>
            <p>
              For everything else, you can edit it directly inline just by
              clicking on it and typing what you want. Don&apos;t forget to edit
              the contact form and the signup form by clicking on the correct
              button to get those popup forms to show.
            </p>
            <h2>2. Inline Editing</h2>
            <p>
              Javelin&apos;s landing page builder is powerful and easy to use
              because you can edit all of the text on the page in-line. When you
              hover your mouse over an area, a blue box will surround the places
              you can edit. Simply click on the text to get started.
            </p>
            <h2>3. Previewing Your Page</h2>
            <p>
              When you are happy with the way your landing page looks, you can
              click the floating &quot;Save &amp; Preview&quot; button on the
              bottom right of your screen. This will show you what your page
              looks like live, and allows you to click around and test the
              various links and popup forms. You will not be able to sign-up or
              submit the contact form in the preview mode.
            </p>
            <h2>The Contact Form</h2>
            <p>
              Emails submitted on the contact form count towards your signup
              count. When a user submits their email and message, it will show
              up in your landing page experiment with their message. Feel free
              to email them directly if you find relevant.
            </p>
            <h2>P/M Fit Surveys</h2>
            <p />
            <div id="javelin-mindset" />
            <h2>Final Recommendations</h2>
            <p>
              We&apos;ve given you the principles and the tools, the final
              battle is inside yourself.
            </p>
            <figure>
              <Image
                src="/michaelJordan.jpg"
                alt="Michael jordan is lean"
                width={1310}
                height={873}
              />
              <figcaption>
                The lean process is simple, but not easy. You will have to let
                go of your ego and embrace failure to succeed.
              </figcaption>
            </figure>

            {/* <ul role="list">
              <li>Quis elit egestas venenatis mattis dignissim.</li>
              <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
              <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
            </ul>
            <blockquote>
              <p>
                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                pellentesque. Blandit amet, sed aenean erat arcu morbi.
              </p>
            </blockquote>
            <figure>
              <Image
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                alt=""
                width={1310}
                height={873}
              />
              <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
            </figure> */}
          </div>
        </div>
      </div>
    </div>
  );
}
