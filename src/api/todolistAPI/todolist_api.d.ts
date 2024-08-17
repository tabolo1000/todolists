export type ResponseDataType<T = {}> = {
    data: T
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
}

export type ItemType = {
    item: {
        id: string,
        title: string,
        addedDate: string,
        order: number,
    }
}