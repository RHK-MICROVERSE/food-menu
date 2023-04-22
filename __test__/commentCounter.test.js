
/**
 * @jest-environment jsdom
 */

const get = async (ID, CMT) => {
    const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DQ1WY7tbkUIhRnRaIdyZ/comments?item_id=${ID}`);
    let output = [];
    const data = await res.json();
    const comments = document.querySelectorAll('.comments');
    const commentCount = document.querySelectorAll('.commentC');
    data.forEach((Comment) => {
      output += `<p>[${Comment.creation_date}]&nbsp;&nbsp;${Comment.username}:${Comment.comment}</p>`;
    });
    commentCount[CMT].innerHTML = data.length;
    comments[CMT].innerHTML = output;
  };

  describe('Should render the exact comment count', () => {
    it('Should render 5 comments in the list', () => {
      const commentElement = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  
      expect(get(commentElement,5)).toEqual(' (5)');
    });
  });