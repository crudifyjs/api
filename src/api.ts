import { Page, Pagination } from '@/pagination';

export interface CreateAPI<CREATE, RESULT = void> {
    create(request: CREATE): Promise<RESULT>;
}

export interface ReadOneAPI<READ, ID> {
    readOne(id: ID): Promise<READ>;
}

export interface ReadListAPI<READ> {
    readList(): Promise<READ[]>;
}

export interface ReadPageAPI<READ> {
    readPage(pagination: Pagination): Promise<Page<READ>>;
}

export interface ReadFilteredListAPI<READ, FILTER> {
    readFilteredList(filter: FILTER): Promise<READ[]>;
}

export interface ReadFilteredPageAPI<READ, FILTER> {
    readFilteredPage(filter: FILTER, pagination: Pagination): Promise<Page<READ>>;
}

export type ReadAPI<READ, ID> = ReadOneAPI<READ, ID> & ReadListAPI<READ> & ReadPageAPI<READ>;

export type ReadFilteredAPI<READ, FILTER, ID> =
    ReadAPI<READ, ID>
    & ReadFilteredListAPI<READ, FILTER>
    & ReadFilteredPageAPI<READ, FILTER>;

export interface UpdateAPI<UPDATE, ID, RESULT = void> {
    update(id: ID, request: UPDATE): Promise<RESULT>;
}

export interface DeleteAPI<ID> {
    delete(id: ID): Promise<void>
}
