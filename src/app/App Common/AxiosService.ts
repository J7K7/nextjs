import AxiosClient from "./AxiosClient";
import {CancelToken} from 'axios';
class AxiosService{
    // private static _axiosClient : AxiosClient;

    static get(
        url : string,
        {
            success,
            failed,
            error,
            params,
            token,
            startPage,
        } :
        {
            success? : Function,
            failed? : Function,
            error? : Function,
            params?: Map<string, any>,
            token?: CancelToken,
            startPage?: Number,
        }
    ){
        AxiosClient._getInstance().get(
            url,
            (data : any) =>{
                if(data["Status"] == false){
                    failed!(data);
                } else{
                    success!(data);
                }
            },
            {
                params : params,
                errorCallBack : (errorMessage : any) =>{
                    error!(errorMessage);
                },
                token : token
            }
        );
    }


    static post(
        url : string,
        {
            formData,
            params,
            queryParams,
            success,
            failed,
            error,
            token,
        }
        :
        {
            formData? : FormData,
            params?: Map<string, any>,
            queryParams?: Map<string, any>,
            success? : Function,
            failed? : Function,
            error? : Function,
            token?: CancelToken,  
        },
        addHeader : boolean = false
    ){
        AxiosClient._getInstance().post(
            url,
            (data : any) =>{
                if(data["Status"] == false){
                    failed!(data);
                } else{
                    success!(data);
                }
            },
            (): any => {},
            {
                formData : formData,
                params : params,
                queryParams : queryParams,
                errorCallBack : (errorMessage : any) =>{
                    error!(errorMessage);
                },
                addHeader : addHeader,
            },            
        );
    }

    static put(
        url : string,
        {
            formData,
            params, 
            queryParams,
            success,
            failed,
            error,
            token,
        } :
        {
            formData? : FormData,
            params? : Map<string, any>,
            queryParams? : Map<string, any>,
            success? :  Function,
            failed? : Function,
            error? : Function,
            token? : CancelToken,
        }
    ){
        AxiosClient._getInstance().put(
            url,
            (data : any) =>{
                if(data["Status"] == false){
                    failed!(data);
                } else{
                    success!(data);
                }
            },
            (): any => {},
            {
                formData : formData,
                params : params,
                queryParams : queryParams,
                errorCallBack : (errorMessage : any) =>{
                    error!(errorMessage);
                },
            },
        );
    }

    static delete(
        url : string,
        {
            params, 
            queryParams,
            success,
            failed,
            error,
            token,
        } :
        {
            params? : Map<string, any>,
            queryParams? : Map<string, any>,
            success? :  Function,
            failed? : Function,
            error? : Function,
            token? : CancelToken,
        }
    ){
        AxiosClient._getInstance().delete(
            url,
            (data : any) =>{
                if(data["Status"] == false){
                    failed!(data);
                } else{
                    success!(data);
                }
            },
            {
                params : params,
                errorCallBack : (errorMessage : any) =>{
                    error!(errorMessage);
                },
                token : token
            },
        );
    }


}



export default AxiosService;