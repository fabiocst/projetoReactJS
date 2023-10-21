function Produto({nome, foto, desc})
{
return(
<div>
<h2>{nome}</h2>
<img src={foto} height="100px" width="100px"/>
<p>Descrição: {desc}</p>
</div>
)
}
export default Produto;