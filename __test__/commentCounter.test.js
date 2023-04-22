import { get } from "../modules/foodComment";
/**
 * @jest-environment jsdom
 */

  describe('Should render the exact comment count', () => {
    it('Should render 5 comments in the list', () => {
      const commentElement = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  
      expect(get(commentElement,5)).toEqual(' (5)');
    });
  });