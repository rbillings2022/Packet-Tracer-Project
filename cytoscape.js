//Cytoscape graphing script
document.addEventListener("DOMContentLoaded", function () {

    const cy = cytoscape({
        container: document.getElementById('cytoscape'),

        elements: [
            { data: { id: 'PC1', type: 'pc'} },
            { data: { id: 'Switch', type: 'switch' } },
            { data: { id: 'Router1' } },
            { data: { id: 'Router2' } },
            { data: { id: 'link1', source: 'PC1', target: 'Router1' } },
            { data: { id: 'link2', source: 'Router2', target: 'Router1' } },
            { data: { id: 'link3', source: 'Switch', target: 'PC1' } }
        ],

        style: [
            {
                selector: 'node',
                style: {
                    'background-image': 'icons/computer.png',
                    'background-color': '#172738',
                    'label': 'data(id)',
                    'color': '#fff',
                    'text-halign': 'center'
                }
            },
            {
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': '#ccc'
                }
                

            },

        ],
        layout: {
            name: 'circle'
        }
    });
    cy.on('tap', 'node[type="pc"]', function(evt) {
        console.log(evt.target.id());
        cy.$('#PC1').remove();

    });
});
