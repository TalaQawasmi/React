import React, {useState} from 'react'

const TodoComponent = () => {
    const [todoList, setTodoList] = useState([
        {name: "Do the night study"},
    {name: "Google it"}])

    const clickHandler = () => {
        
        if(document.getElementById("text").value < 1){
            document.getElementById("text").value=""
        
        }else{
            let name= document.getElementById("text").value
        setTodoList(todoList.concat({name: name, checked: false}))
        document.getElementById("text").value=""
        
        }
    }

    const changeStatus = (e, index) => {
        setTodoList(todoList.map((item, i) => i=== index === parseInt(e.target.id)?
        {name: item.name, checked: e.target.checked} :
        {name: item.name, checked: item.checked}))
    }


    

    const onDelete = e => {
        setTodoList(todoList.filter((item,index) => index !== parseInt(e.target.id)));
    }

    return (

        <div>
                    <h3>Todo-List</h3>

            {
                todoList.map((item, index) => {
                    return <div key={index}>
                        {item.name} 
                        <input type="button" value="Delete"  id={index} onClick={ onDelete }  />
                        <input type="checkbox" id={index} checked={item.status} onChange={changeStatus}/>
                        {item.checked == true }
                        </div>
                })
    
            }
            <div>
            <textarea id="text"/>
            <br></br>
            <input type="button" value="add" onClick={clickHandler}/>
            </div>
        </div>
    )
}

export default TodoComponent
