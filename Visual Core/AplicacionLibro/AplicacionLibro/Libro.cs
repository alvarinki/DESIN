using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Markup;

namespace AplicacionLibro
{
    public class Libro :INotifyPropertyChanged
    {
        private String titulo;
        public String Titulo
        {
            get { return titulo; }
            set
            {
                titulo = value;
                this.PropertyChanged(this, new PropertyChangedEventArgs("Titulo"));
            }
        }

        private String autor;
        public String Autor
        {
            get { return autor; }
            set { autor = value; this.PropertyChanged(this, new PropertyChangedEventArgs("Autor")); }}

    
        
       

    private DateTime fechEntrada;
    public DateTime FechEntrada
    {
        get { return fechEntrada; }
        set { fechEntrada = value; this.PropertyChanged(this, new PropertyChangedEventArgs("FechEntrada")); }
    }

        public Libro(string titulo, string autor, DateTime fechEntrada) {
            this.titulo = titulo;
            this.autor = autor; 
            this.fechEntrada= fechEntrada;  
        }

        public Libro()
        {
            this.fechEntrada=DateTime.Now;
        }


        public event PropertyChangedEventHandler? PropertyChanged;

     }
}

