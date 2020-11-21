export interface Category {
  id: number;
  name: string;
}


export let fakeCategoryData: Category[] = [
  {id: 0, name: "type0"},
  {id: 1, name: "type1"},
  {id: 2, name: "type2"},
  {id: 3, name: "type3"},
  {id: 4, name: "type4"},
];

export interface Tag {
  id: number;
  name: string;
}

export let fakeTagData: Tag[] = [
  {id: 0, name: "tag0"},
  {id: 1, name: "tag1"},
  {id: 2, name: "tag2"},
  {id: 3, name: "tag3"},
  {id: 4, name: "tag4"},
  {id: 5, name: "tag5"}
];


export interface BlogListItem {
  id: number;
  title: string;
  recommended: boolean;
  published: boolean;
  updateTime: Date;

}


export let fakeBlogListData: BlogListItem[] = [
  {id: 0, title: "blog1", recommended: true, published: false, updateTime: new Date()},
  {id: 2, title: "blog2", recommended: false, published: false, updateTime: new Date()},
  {id: 3, title: "blog3", recommended: true, published: false, updateTime: new Date()},
  {id: 4, title: "blog4", recommended: false, published: false, updateTime: new Date()},
  {id: 0, title: "blog1", recommended: true, published: false, updateTime: new Date()},
  {id: 2, title: "blog2", recommended: false, published: false, updateTime: new Date()},
  {id: 3, title: "blog3", recommended: true, published: false, updateTime: new Date()},
  {id: 4, title: "blog4", recommended: false, published: false, updateTime: new Date()},
  {id: 0, title: "blog1", recommended: true, published: false, updateTime: new Date()},
  {id: 2, title: "blog2", recommended: false, published: false, updateTime: new Date()},
  {id: 3, title: "blog3", recommended: true, published: false, updateTime: new Date()},
  {id: 4, title: "blog4", recommended: false, published: false, updateTime: new Date()},
];
