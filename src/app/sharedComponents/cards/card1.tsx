type Card1Props = {
    children: React.ReactNode;
    className?: string;
};

export default function Card1(props: Card1Props) {
    return (
        <div
            className={
                "bg-white rounded-lg shadow-2xl py-5 px-12 " +
                props.className
            }
        >
            {props.children}
        </div>
    );
}
