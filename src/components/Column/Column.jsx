import Card from "../Card/Card";

const Column = ({title}) => {
    return ( <div className="main__column">
    <div className="column__title">
        <p>{title}</p>
    </div>
    <div className="cards">
        <Card category="Resaerch" title="Изучить редактор" date="12.11.24" />
        <Card category="Web Desing" title="Запилить главную" date="12.12.24" />
    </div>
</div> );
}
 
export default Column;