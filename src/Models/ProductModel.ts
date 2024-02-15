class ProductModel {
  id: number;
  name: string;
  email: string;
  mobileNo: string;
  password: string;
  image: string;
  dob: string;

  constructor(data: any) {
    this.id = data.id || 0;
    this.name = data.name || '';
    this.email = data.email || '';
    this.mobileNo = data.mobileNo || '';
    this.password = data.password || '';
    this.image = data.image || '';
    this.dob = data.dob || '';
  }

  fromJson(json: string): void {
    const data = JSON.parse(json);
    this.id = data.id || 0;
    this.name = data.name || '';
    this.email = data.email || '';
    this.mobileNo = data.mobileNo || '';
    this.password = data.password || '';
    this.image = data.image || '';
    this.dob = data.dob || '';
  }

  toJson(): string {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      email: this.email,
      mobileNo: this.mobileNo,
      password: this.password,
      image: this.image,
      dob: this.dob
    });
  }
}

export default ProductModel;
