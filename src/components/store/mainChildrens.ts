import { IChildrens } from '../molecules/fields/Fileds';
import { IItemTodo } from '../molecules/itemTodo/ItemTodo';

export interface IChildrensArray {
  inputCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  inputTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  category: string,
  inputTitleValue: string,
  addCategories: () => void,
  cleanRedactItems: () => void,
  redactItemFunc: () => void,
  addItem: () => void,
  selectedCategory: string[],
  categories: string[],
  itemCategory: (event: React.MouseEvent<HTMLDivElement>) => void
  inputTextChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
  inputTextValue: string,
  redactItemChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  redactItem?: IItemTodo,
  itemCategoryRedact: (event: React.MouseEvent<HTMLDivElement>) => void,
  redactTextChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
  inputSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  inputSearchValue: string,
  selectedOption: string[],
  selectChange: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}


export const childrensArrayFunc = ({ itemCategoryRedact, selectChange, selectedOption, inputSearchValue, inputSearchChange, redactTextChange, redactItemFunc, cleanRedactItems, redactItem, redactItemChange, inputTextValue, inputCategoryChange, category, addCategories, inputTitleValue, inputTitleChange, addItem, selectedCategory, categories, itemCategory, inputTextChange }: IChildrensArray) => {
  const childrensArray: IChildrens[] = [
    {
      input: {
        inputChange: inputCategoryChange,
        value: category,
      },
      text: 'Add Category',
      buttons: {
        button1: {
          onClick: addCategories,
          text: 'Add',
        },
      },
    },
    {
      input: {
        inputChange: inputTitleChange,
        value: inputTitleValue,
      },
      text: 'Add item',
      buttons: {
        button1: {
          onClick: addItem,
          text: 'Add',
        },
      },
      select: {
        selectedValue: selectedCategory,
        optionsValue: categories,
        selectValueChange: itemCategory,
      },
      textArea: {
        textAreaChange: inputTextChange,
        textAreaValue: inputTextValue,
      },
    },
    {
      input: {
        inputChange: redactItemChange,
        value: redactItem?.title !== undefined ? redactItem.title : '',
      },
      text: 'Redact item',
      buttons: {
        button1: {
          onClick: cleanRedactItems,
          text: 'Clean',
        },
        button2: {
          onClick: redactItemFunc,
          text: 'Redact',
        },
      },
      select: {
        selectedValue: redactItem?.category !== undefined ? redactItem.category : ['any category'],
        optionsValue: categories,
        selectValueChange: itemCategoryRedact,
      },
      textArea: {
        textAreaChange: redactTextChange,
        textAreaValue: redactItem?.text !== undefined ? redactItem.text : '',
      },
    },
    {
      input: {
        inputChange: inputSearchChange,
        value: inputSearchValue,
      },
      text: 'Search item',
      select: {
        selectedValue: selectedOption,
        optionsValue: categories,
        selectValueChange: selectChange,
      },
    },
  ];
  return childrensArray;
};
