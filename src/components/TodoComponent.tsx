interface todoInterface {
    name: string,
    detail: string,
    status: string
}

const TodoComponent = (props: todoInterface) => {

    return <div>
        <h1>{props.name}</h1>
        <span>{props.detail}</span>
    </div>
};


export default TodoComponent;