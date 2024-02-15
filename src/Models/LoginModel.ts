class LoginModel {
    accessToken?: string;
    name?: string;
    isActive?: string;
    image?: string;
  
    constructor(data: any) {
      this.accessToken = data.accessToken || '';
      this.name = data.name || '';
      this.isActive = data.isActive || '';
      this.image = data.image || '';
    }
  
    fromJson(json : string): void {
        const data = JSON.parse(json);
        this.name = data.name || '';
        this.accessToken = data.accessToken || '';
        this.isActive = data.isActive || '';
        this.image = data.image || '';
    }
  
    getImageWidget(): string | null {
        if (this.image) {
          return `<img src="IMAGE_PATH/${this.image}" alt="User Image" />`;
        }
        return null;
    }
  
    toJson(): string {
        return JSON.stringify({
          accessToken: this.accessToken,
          name: this.name,
          isActive: this.isActive,
          image: this.image
        });
    }
}
  
export default LoginModel;