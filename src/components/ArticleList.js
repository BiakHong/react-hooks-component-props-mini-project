import react from "react";
import Article from "./Article";

function ArticleList({theArticle}){
    const arrList = theArticle.map((arr)=>
            <>git
            <Article key={arr.id} title={arr.title} date= {arr.date} preview={arr.preview}/>
            </>
    )
    return <main>{arrList}</main>;

}

export default ArticleList;