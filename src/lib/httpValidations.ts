export function validateProductFields(id:number, name:string, description:string): { message: string } | void {
    //validaton
    if (typeof id !== "number" || !name || !description) {
       return  {
            message: "Fields id, name and description are required"
        };
    }
    return;
}