import HText from "@/shared/HText";
import { CardType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Card from "./Card";
import ActionButton from "@/shared/ActionButton";
import AboutPageGraphic from "@/assets/AboutPageGraphic.png";

const cards: Array<CardType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Immediate Decision Making",
    description:
      "A live cryptocurrency tracker provides real-time updates on price fluctuations, enabling investors to make informed decisions swiftly. By staying constantly informed, investors can capitalize on market movements, whether it's seizing opportunities for buying or selling, or adjusting investment strategies in response to sudden changes",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Risk Management",
    description:
      "With a live tracker, users can monitor their cryptocurrency portfolios in real time, allowing for proactive risk management. By closely tracking price movements, investors can set up alerts for significant changes or implement stop-loss orders to mitigate potential losses. This real-time monitoring enhances overall portfolio management and reduces exposure to sudden market downturns.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Market Analysis and Trend Identification",
    description:
      "A live tracker offers valuable insights into market trends and behaviors. By observing live price movements and historical data, users can identify patterns, detect emerging trends, and make more accurate predictions about future price movements. This analysis enables investors to adjust their strategies accordingly, whether it involves long-term investment decisions or short-term trading opportunities.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A TRACKER</HText>
          <p className="my-5 text-sm">
            Introducing our Cryptocurrency Live Tracker: Get real-time updates
            on crypto prices. With a sleek interface, stay informed
            effortlessly. Whether you're an investor or beginner, track your
            favorite assets on your website. Stay ahead with our Cryptocurrency
            Live Tracker.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {cards.map((card: CardType) => (
            <Card
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              className="mx-auto"
              alt="about-page-graphics"
              src={AboutPageGraphic}
            />
          </motion.div>

          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>
                EMBRACING <span className="text-primary-500">SUCCESS</span> WITH
                OUR LIVE CRYPTO TRACKER{" "}
              </HText>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                At CryptoApp, seeing our users embrace our live cryptocurrency
                tracker with enthusiasm and satisfaction fuels our passion for
                innovation. Knowing that our platform empowers investors to make
                informed decisions in real time brings us immense joy. We're
                thrilled to witness our users' success stories, whether it's
                seizing lucrative opportunities, managing risk effectively, or
                staying ahead of market trends. Their happiness and success
                drive us to continuously enhance our tracker, ensuring it
                remains a valuable tool for navigating the dynamic world of
                cryptocurrencies. Together, we're shaping the future of crypto
                investment with confidence and excitement.
              </p>
              <div className="mt-16">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join now
                </ActionButton>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
