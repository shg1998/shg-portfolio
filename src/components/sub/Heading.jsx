const Heading = ({text}) => {
    return (
        <div className={"text-3xl sm:text-2xl font-bold text-gray-700 mb-14 self-start"}>
            {text}
        </div>
    );
};

export default Heading;