import { makeAutoObservable, toJS } from "mobx"

export class BlocksStore {
  maxIndex = 0;
  blocks = []

  constructor(blocksInfo){
    makeAutoObservable(this);
    blocksInfo.forEach((blockInfo) => {
      const block = new Block(blockInfo,`block${++this.maxIndex}`);
      this.blocks.push(block);
    })
  }

  getData(){
    const data = toJS(this.blocks);
    return data;
  }

  createBlock(blockInfo){
    const block = new Block(blockInfo, `block${++this.maxIndex}`);
    this.blocks.push(block);
    return block;
  }

  removeBlock(id){
    const index = this.blocks.map(block => block.id).indexOf(id);
    this.blocks.splice(index, 1);
  }
}

export class Block {
  id
  type
  name
  url
  grid
  image
  title
  caption
  text
  items

  constructor(blockInfo, id){
    makeAutoObservable(this);
    Object.assign(this, blockInfo)
    this.id = id;
    this.items = [];
    blockInfo.items?.forEach(itemData => {
      const item = new Item(itemData);
      this.items.push(item);
    })
  }

  changePosition(newRowPos, newColumnPos){
    const [columnStart, columnEnd] = this.grid.column.split("/");
    const [rowStart, rowEnd] = this.grid.row.split("/");
    const newEndColumn = Number(newColumnPos) + Number(columnEnd) - Number(columnStart);
    const newEndRow = Number(newRowPos) + Number(rowEnd) - Number(rowStart);
    this.grid = {column: `${newColumnPos}/${newEndColumn}`, row: `${newRowPos}/${newEndRow}`};
  }

  changeImage(filename){
    this.image = filename;
  }

  changeTitle(title){
    this.title = title;
  }

  changeCaption(caption){
    this.caption = caption;
  }

  changeText(text){
    this.text = text;
  }

  removeItem(index){
    this.items.splice(index, 1);
  }

  createItem(){
    this.items.push(this.items[0]);
  }
}

export class Item{
  title
  caption
  description
  text
  image
  constructor(itemData){
    makeAutoObservable(this);
    console.log(itemData);
    Object.assign(this, itemData);
  }

  changeTitle(title){
    this.title = title;
  }

  changeCaption(caption){
    this.caption = caption;
  }

  changeDescription(description){
    this.description = description;
  }

  changeText(text){
    this.text = text;
  }

  changeImage(filename){
    this.image = filename;
  }
}