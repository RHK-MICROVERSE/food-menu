import get  from "../modules/commentCounter";
/**
 * @jest-environment jsdom
 */

  describe('Should render the exact comment count', () => {
    it('Should render 5 comments in the list', () => {
      const commentElement = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  
      expect(get(commentElement,commentElement)).toEqual(5);
    });
  });