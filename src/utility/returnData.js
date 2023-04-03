import moment from "moment/moment";

export function jsonTransformForm(data){
    let formData =new FormData();
    Object.keys(data).forEach(key => {
        formData.append(key, data[key])
    })
    return formData;
}

export function getDate(){
    return moment().format('YYYY-MM-DD HH:mm:ss')
}
