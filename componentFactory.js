function getComponent(componentType, setClass,  setHTML, Child)
{
	var result =document.createElement(componentType);
	if(setClass)
	{
		result.setAttribute('class',setClass);
	}
	if(setHTML)
	{
		result.innerHTML=setHTML;
	}
	if(Child)
	{
		for(c in child)
		{
			result.appendChild(c);
		}
	}
	return result;
}

