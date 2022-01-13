import React,{useState} from "react";

interface TodoComponentProps {
    id: string,
    deleteClicked: (id: string) => void
}

const TodoComponent = (props: TodoComponentProps) => {

    const [name, setName] = useState(props.id);
    const [tempName, setTempName] = useState("burak");
    const [detail, setDetail] = useState<string>("detail");
    const [tempDetail, setTempDetail] = useState<string>("detail");
    const [status, setStatus] = useState("normal");
    const [backgroundColor, setBackgroundColor] = useState(`rgba(${Math.random() * (240 - 80) + 80},${Math.random() * (200 - 80) + 80},${Math.random() * (200 - 80) + 80},1)`);

    const okClicked = () => {
        setName(tempName);
        setDetail(tempDetail);
        setStatus("normal")
    };

    const editClicked = () => {
        setTempName(name);
        setTempDetail(detail);
        setStatus("editing")
    };

    const deleteClicked = () => {
        props.deleteClicked(props.id);
    };

    if (status === "editing") {
        return <div className={"todo-box"} style={{backgroundColor: backgroundColor}}>
            <h1><input className={"todo-name-input"} value={tempName} onChange={(e) => setTempName(e.target.value)}/></h1>
            <span><input className={"todo-detail-input"} value={tempDetail} onChange={(e) => setTempDetail(e.target.value)}/></span>
            <button className={"ok-button"} onClick={() => okClicked()}>Ok</button>
            <button className={"cancel-button"} onClick={() => setStatus("normal")}>Cancel</button>
        </div>
    }
    return <div className={"todo-box"} style={{backgroundColor: backgroundColor}}>
        <h1>{name}</h1>
        <span>{detail}</span>
        <button className={"edit-button"} onClick={() => editClicked()}>Edit</button>
        <button className={"delete-button"} onClick={() => deleteClicked()}>Delete</button>
    </div>
};

export default TodoComponent;