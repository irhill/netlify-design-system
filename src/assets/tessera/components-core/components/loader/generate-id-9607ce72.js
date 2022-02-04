function generateId(t){return`${t?t+"-":""}${Date.now().toString(36)+Math.random().toString(36).substr(2)}`}export{generateId as g};
