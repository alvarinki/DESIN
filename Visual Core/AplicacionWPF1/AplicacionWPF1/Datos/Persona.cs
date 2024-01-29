using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AplicacionWPF1.Datos
{
    public class Persona: INotifyPropertyChanged
    {
        private String nombre;
        public string Nombre
        {
            get { return nombre; }
            set
            {
                nombre = value;
                this.PropertyChanged(this, new PropertyChangedEventArgs("Nombre"));
            }
        }
        private String apellidos;
        public string Apellidos {
            get { return nombre; }
            set { apellidos = value;
                this.PropertyChanged(this, new PropertyChangedEventArgs("Apellidos"));
            } }
                
                
              

        public Persona(string nombre, string apellidos)
        {
            this.nombre = nombre;
            this.apellidos = apellidos;
        }

        public override string ToString()
        {
            return Nombre + " " + Apellidos;
        }

        public event PropertyChangedEventHandler? PropertyChanged;
    }
}

