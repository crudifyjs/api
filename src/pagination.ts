export interface Pagination {
    page: number;
    rowsPerPage: number;
    sortBy: string[];
    descending: boolean[];
}

export interface Page<T> {
    content: T[];
    totalElements: number;
    totalPages: number;
}
