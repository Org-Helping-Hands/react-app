export interface IPostMinimal {
  id: string;
  postedBy: {
    name: string;
  };
  latitude: string;
  longitude: string;
  neededItems: {
    no: number;
    itemName: string;
  }[];
}
