import React, { useState } from 'react';
import Keyboard from './Keyboard';
import TextArea from './TextArea';
import Toolbar from './Toolbar';
import './css_modules/TextEditor.css';

function TextEditor() {
  const [content, setContent] = useState([]);
  const [history, setHistory] = useState([]);

  const [isEnglish, setIsEnglish] = useState(true);
  const [isUpperCase, setIsUpperCase] = useState(true);
  
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [selectedFont, setSelectedFont] = useState('Arial');
  const [selectedFontSize, setSelectedFontSize] = useState(16);
  const [selectedColor, setSelectedColor] = useState('#000000'); 



  function keyPressHandler(key) {
    
    const newContent = {
        value: key,
        color: selectedColor,
        fontSize: selectedFontSize,
        bold: isBold,
        italic: isItalic,
        underline: isUnderline,
        font: selectedFont
    };

    if (key === 'undo') {
        if (history.length > 0) {
            setContent(history[history.length - 1]);
            setHistory(prevHistory => prevHistory.slice(0, -1));
        }
    } else if (key === 'clear') {
        setHistory(prevHistory => [...prevHistory, content]);
        setContent([]);
    } else if (key === 'delete') {
        setHistory(prevHistory => [...prevHistory, content]);
        setContent(content.slice(0, -1));
    } else if (key === 'uppercase') {
      setHistory(prevHistory => [...prevHistory, content]);
      setContent(c => c.map(item => ({...item, value: item.value.toUpperCase()})));
    } else if (key === 'lowercase') {
      setHistory(prevHistory => [...prevHistory, content]);
      setContent(c => c.map(item => ({...item, value: item.value.toLowerCase()})));
    } else if (key === 'enter') {
      setHistory(prevHistory => [...prevHistory, content]);
      setContent(prevContent => [...prevContent, {value: <br/>}]);
    }
     else {
        setHistory(prevHistory => [...prevHistory, content]);
        setContent(prevContent => [...prevContent, newContent]);
    }
  }

  return (
    <div className="TextEditor">
      <TextArea content={content}/>
      <Toolbar
        isEnglish={isEnglish}
        setIsEnglish={setIsEnglish}
        isUpperCase={isUpperCase}
        setIsUpperCase={setIsUpperCase}
        isBold={isBold}
        onBoldChange={setIsBold}
        isItalic={isItalic}
        onItalicChange={setIsItalic}
        isUnderline={isUnderline}
        onUnderlineChange={setIsUnderline}
        selectedFont={selectedFont}
        onSelectedFontChange={setSelectedFont}
        selectedFontSize={selectedFontSize}
        onSelectedFontSizeChange={setSelectedFontSize}
        selectedColor={selectedColor}
        onSelectedColorChange={setSelectedColor}
      />
      <Keyboard onKeyPress={keyPressHandler} isEnglish={isEnglish} isUpperCase={isUpperCase} />
    </div>
  );
}

export default TextEditor;
