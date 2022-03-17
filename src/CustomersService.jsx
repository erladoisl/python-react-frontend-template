import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000';

export default class CustomersService{
	
	constructor(){}
		
	getCustomers() {
		let data = [];
		const url = `${API_URL}/api/customers`;

		return axios.get(url).then(response => {
			data = response.data;
		}).catch(error => {
			console.log(`error while getting customers: ${error}`);
		}).then(() => {
			return data;
		});
	}  
	getCustomersByURL(link){
		let data = {};
		const url = `${API_URL}${link}`;
		console.log('Getting customers by url');

		return axios.get(url).then(response => {
			data = response.data;
		}).catch(error => {
			console.log(`error while getting customer by url(): ${error}`)
		}).then(() => {
			return data;
		});
	}
	getCustomer(pk) {
		let data = {};
		const url = `${API_URL}/api/customers/customer/?pk={pk}`;
		console.log(`Getting customer by pk ${pk}`)

		return axios.get(url).then(response => {
			data = response.data;
		}).catch(error => {
			console.log(`error while getting customer by pk(): ${error}`)
		}).then(() => {
			return data;
		});
	}
	deleteCustomer(customer){
		let data = {};
		const url = `${API_URL}/api/customers/customer/?pk=${customer.pk}`;
		console.log(`Delete customer by pk ${customer.pk}`)

		return axios.delete(url);
	}
	createCustomer(customer){
		const url = `${API_URL}/api/customers/customer/`;
		console.log(`Create customer ${customer}`)

		return axios.post(url,customer);
	}
	updateCustomer(customer){
		const url = `${API_URL}/api/customers/?pk=${customer.pk}`;
		console.log(`Update customer ${customer}`)

		return axios.put(url,customer);
	}
}