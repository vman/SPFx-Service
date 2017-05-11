export interface IListService {
     getDocumentLibrary(): Promise<JSON>;
     getDocumentLibraryWithPnPJS(): Promise<JSON>;
}