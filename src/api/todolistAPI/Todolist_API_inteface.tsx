
export type TodolistType = {
    id: string,
    title: string,
    addedDate: string,
    order: number,
}


type APIComponentType = {
    data: TodolistType[] | null | {item: TodolistType} | number | string,
}


export const TodolistAPI = ({ data }: APIComponentType) => {
    
    let listData: any;
    
    if (Array.isArray(data)) {
        listData = data.map(el => <li>
            <ol>
                <li>id = {el.id}</li>
                <li>title = {el.title}</li>
                <li>addedDate = {el.addedDate}</li>
                <li>order = {el.order}</li>
            </ol>
        </li>)
    }
    if (typeof data === "object" && !!data && !Array.isArray(data)) {
        debugger
            listData = data
    }
    if(typeof data === "string"){
        listData = data
    }
    if(typeof data === "number"){
        listData = `your code: ${data}`
    }
        return <div>
            <ul>
                {listData}
            </ul>
        </div>
}



