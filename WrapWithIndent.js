// WrapWithIndent.js
//
// JavaScript for wrapping plain text to a fixed length and also indent based 
// on the first character(s) in each line.
//
// Incidentally, we're unabashed fans of Hungarian-like notation around here,
// or at least we are for personal projects. (Camel grunt right back at 'cha. )
//
function sWrapWithIndent( sIn 
                          , iMaxWidth 
                          , iNumOfSpacesPerIndent = 4 
                          , bFormatLeadingSpacesForCssWhiteSpaceCollapse = false, 
                          , bBreakTokensLongerThanMaxWidth = false ) {

  var sOut;
  
  // To prevent css white-space collapsing, multiple white-space characters
  // must have non-white-space characters inbetween them.
  // White_Space is a unicode property.
  // Cannot find a unicode code point that has zero-width in Windows
  // Notepad but is also White_Space=N.  So, that's why we have the
  // parameter "bFormatLeadingSpacesForCssWhiteSpaceCollapse".
  // Research URLs:
  // http://unicode.org/cldr/utility/character.jsp?a=200B  together with a space (0020)
  // zero-width-space (but it isn't zero width in Notepad and Notepad++)
  // http://unicode.org/cldr/utility/properties.jsp
  // http://www.unicode.org/reports/tr44/#Property_Summary
  // http://unicode.org/cldr/utility/list-unicodeset.jsp?a=%5B%3Aprint%3DNo%3A%5D%26%5B%3AWhite_Space%3DNo%3A%5D&g=&i=
  // https://r12a.github.io/apps/conversion/

  
  return sOut;
}
