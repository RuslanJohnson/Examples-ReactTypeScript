export interface IAddress {
	city: string;
	street: string;
}
export interface IUser {
	id: number;
	name: string;
	email: string;
	address: IAddress;
}
