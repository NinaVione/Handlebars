$(function(){ 
  var data = {
    books: [{
      name: "Alice's Adventures in Wonderland",
      description: "Alice's Adventures in Wonderland is an 1865 novel written by English author Charles Lutwidge Dodgson under the pseudonym Lewis Carroll.",
      author: "Lewis Carroll",
      publishDate: "1865",
      url: "http://t0.gstatic.com/images?q=tbn:ANd9GcT4FY46Ud2YcRRwIgyfIkRr4_peMR-5ngJ--ulsQ6drLWpOQha3"
    }, {
      name: "The Little Prince",
      author: "Antoine de Saint-Exupery",
      description: "The Little Prince, first published in April 1943, is a novella, the most famous work of French aristocrat, writer, poet, and pioneering aviator Antoine de Saint-Exupery.",
      publishDate: "April 1943",
      url: "http://t2.gstatic.com/images?q=tbn:ANd9GcTOOzoPdyKb_VcsqPLdgJpJ6FAVeQelKtShiwjX1BNNULPtu_Uj"
    }]
  };
  // get handlebars template
  var getTemplateScript = $('#header').html();

  // compile handlebars template return function
  var getTemplate = Handlebars.compile(getTemplateScript);

  // call function with data object
  $('books').replaceWith(getTemplate(data));
});