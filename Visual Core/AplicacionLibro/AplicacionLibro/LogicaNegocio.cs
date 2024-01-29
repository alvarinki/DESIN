using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AplicacionLibro
{
    public class LogicaNegocio
    {
        public ObservableCollection<Libro> listaLibros { get; set; }

        public LogicaNegocio() { 
        listaLibros = new ObservableCollection<Libro>();
            listaLibros.Add(new Libro("Mort", "Terry Pratchett", DateTime.Now));
        }

        public void Add(Libro libro) { 
        listaLibros.Add(libro);
        }
    }
}
