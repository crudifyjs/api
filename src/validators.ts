import {
    CreateAPI,
    DeleteAPI,
    ReadAPI, ReadFilteredAPI,
    ReadFilteredListAPI, ReadFilteredPageAPI,
    ReadListAPI,
    ReadOneAPI,
    ReadPageAPI,
    UpdateAPI,
} from '@/api';

export function isCreateAPI(obj: any): obj is CreateAPI<any, any> {
    return typeof obj.create === 'function';
}

export function isReadOneAPI(obj: any): obj is ReadOneAPI<any, any> {
    return typeof obj.readOne === 'function';
}

export function isReadListAPI(obj: any): obj is ReadListAPI<any> {
    return typeof obj.readList === 'function';
}

export function isReadPageAPI(obj: any): obj is ReadPageAPI<any> {
    return typeof obj.readPage === 'function';
}

export function isReadFilteredListAPI(obj: any): obj is ReadFilteredListAPI<any, any> {
    return typeof obj.readFilteredList === 'function';
}

export function isReadFilteredPageAPI(obj: any): obj is ReadFilteredPageAPI<any, any> {
    return typeof obj.readFilteredPage === 'function';
}

export function isReadAPI(obj: any): obj is ReadAPI<any, any> {
    return isReadOneAPI(obj) && isReadListAPI(obj) && isReadPageAPI(obj);
}

export function isReadFilteredAPI(obj: any): obj is ReadFilteredAPI<any, any, any> {
    return isReadAPI(obj) && isReadFilteredListAPI(obj) && isReadFilteredPageAPI(obj);
}

export function isUpdateAPI(obj: any): obj is UpdateAPI<any, any, any> {
    return typeof obj.update === 'function';
}

export function isDeleteAPI(obj: any): obj is DeleteAPI<any> {
    return typeof obj.delete === 'function';
}
