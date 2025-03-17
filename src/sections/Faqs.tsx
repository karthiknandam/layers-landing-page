import FaqComponent from "@/components/FaqComponent";
import Tag from "@/components/Tag";

const faqs = [
    {
        question: "How is Layers different from other design tools?",
        answer: "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
    },
    {
        question: "Is there a learning curve?",
        answer: "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
    },
    {
        question: "How do you handle version control?",
        answer: "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
    },
    {
        question: "Can I work offline?",
        answer: "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
    },
    {
        question: "How does Layers handle collaboration?",
        answer: "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
    },
];

export default function Faqs() {
    return (
        <section id="faqs" className="py-24 scroll-mt-2">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl text-center mt-6 font-medium md:max-w-xl md:mx-auto">
                    Questions? We&apos;ve got{" "}
                    <span className="text-lime-500">answers</span>
                </h2>
                <div className="flex flex-col gap-6 mt-12 max-w-xl mx-auto">
                    {faqs.map((faq) => (
                        <FaqComponent
                            key={faq.question}
                            title={faq.question}
                            description={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
