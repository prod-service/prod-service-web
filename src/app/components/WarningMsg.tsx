interface IWarningMsgProps {
    text: string
};

const WarningMsg: React.FC<IWarningMsgProps> = ({ text }) => {
    return (
        <div className="text-center border-2 rounded border-red-500 p-3 text-lg">
            <p>{ text }</p>
        </div>
    );
};

export default WarningMsg;