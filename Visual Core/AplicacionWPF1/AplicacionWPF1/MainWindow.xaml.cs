using AplicacionWPF1.Datos;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace AplicacionWPF1
{
    
    public partial class MainWindow : Window
    {

        public ObservableCollection<Persona> ListaPersonas {  get; set; }
        public MainWindow()
        {
            InitializeComponent();
            ListaPersonas = new ObservableCollection<Persona>();
            ListaPersonas.Add(new Persona("Twilight", "Sparkle"));
            ListaPersonas.Add(new Persona("Pinkie", "Pie"));
            ListaPersonas.Add(new Persona("Flutter", "Shy"));
            ListaPersonas.Add(new Persona("Raimbow", "Dash"));
            ListaPersonas.Add(new Persona("Rari", "Ty"));
            ListaPersonas.Add(new Persona("Apple", "Jack"));
            ListaPersonas.Add(new Persona("Apple", "Bloom"));
            ListaPersonas.Add(new Persona("Granny", "Smith"));
            ListaPersonas.Add(new Persona("Big", "Mac"));
            this.DataContext = this;
        }

        private void anadirPersona(object sender, RoutedEventArgs e)
        {

            ListaPersonas.Add(new Persona(textoNombre.Text, textoApellidos.Text));
            textoNombre.Clear();
            textoApellidos.Clear();
        }

        private void ModificarPersona (object sender, RoutedEventArgs e)
        {
            ListaPersonas.ElementAt(0).Nombre = "Pablo";
        }
    }
}
