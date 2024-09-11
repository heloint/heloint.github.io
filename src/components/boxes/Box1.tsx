type Box1Props = {
    children: React.ReactNode;
    extraClasses?: string;
};

export default function Box1(props: Box1Props) {
    return (
        <div
            className={
                "bg-white rounded-lg shadow-2xl py-5 px-12 " +
                props.extraClasses
            }
        >
            {props.children}
        </div>
    );
}
