import TodoItem from "./TodoItem";

export default function TodoItems ({todoItems}) {

    return(
        <>
        <div className='container'>
        {todoItems.map((item) => (
            <TodoItem todoDate={item.date} todoName={item.name} />
        ))}
        </div>
        </>
    )

}